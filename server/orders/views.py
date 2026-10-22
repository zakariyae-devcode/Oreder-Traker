import logging

from django.db import DatabaseError
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .filter import OrderFilter
from .models import Order
from .serializers import OrderSerializer
from rest_framework.throttling import UserRateThrottle

logger = logging.getLogger(__name__)


def user_orders(user):
    return (
        Order.objects
        .filter(customer__user=user)
        .select_related("customer")
        .prefetch_related("items")
    )


class ListOrderView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def get(self, request):
        orders = user_orders(request.user).order_by("-created_at")
        orders = OrderFilter(request.query_params, queryset=orders).qs
        serializer = OrderSerializer(orders, many=True, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class DetailOrderView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def get(self, request, id):
        order = get_object_or_404(user_orders(request.user), id=id)
        serializer = OrderSerializer(order, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateOrderView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def post(self, request):
        serializer = OrderSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            try:
                serializer.save(user=request.user)
            except DatabaseError as e:
                logger.error(f"Database error during order creation: {e}")
                return Response(
                    {"error": "An unexpected error occurred while processing the request"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateOrderView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def patch(self, request, id):
        order = get_object_or_404(user_orders(request.user), id=id)
        serializer = OrderSerializer(
            order, data=request.data, partial=True, context={"request": request}
        )
        if serializer.is_valid():
            try:
                serializer.save()
            except DatabaseError as e:
                logger.error(f"Database error during order update: {e}")
                return Response(
                    {"error": "unable to update due to an internal error"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteOrderView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def delete(self, request, id):
        order = get_object_or_404(user_orders(request.user), id=id)
        try:
            order.delete()
        except DatabaseError as e:
            logger.error(f"Database error during order deletion: {e}")
            return Response(
                {"error": "unable to delete due to an internal error"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        return Response(status=status.HTTP_204_NO_CONTENT)