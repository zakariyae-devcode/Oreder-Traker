

import logging

from django.db import DatabaseError
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import OrderItem
from .serializers import OrderItemSerializer

from rest_framework.throttling import UserRateThrottle

#---------------------------------------------------------#
#-------------------- System OrderItem---------------------#
#---------------------------------------------------------#


logger = logging.getLogger(__name__)


class CreateOrderItemView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def post(self, request):
        serializer = OrderItemSerializer(
            data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            try:
                serializer.save(user=request.user)
            except DatabaseError as e:
                logger.error(f"Database error during orderItem creation: {e}")
                return Response(
                    {"error": "An unexpected error occurred while processing the request"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
            return Response(
                {"message": "orderItem created successfully"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateOrderItemView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def patch(self, request, id):
        item = get_object_or_404(
            OrderItem, id=id, order__customer__user=request.user
        )
        serializer = OrderItemSerializer(
            item, data=request.data, partial=True, context={"request": request}
        )
        if serializer.is_valid():
            try:
                serializer.save()
            except DatabaseError as e:
                logger.error(f"Database error during orderItem update: {e}")
                return Response(
                    {"error": "unable to update due to an internal error"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
            return Response(
                {"message": "orderItem updated successfully"},
                status=status.HTTP_200_OK,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ListOrderItemView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def get(self, request):
        items = OrderItem.objects.filter(
            order__customer__user=request.user
        ).select_related("order", "product")

        order_id = request.query_params.get("order")
        if order_id:
            items = items.filter(order_id=order_id)

        serializer = OrderItemSerializer(
            items, many=True, context={"request": request}
        )
        return Response(serializer.data, status=status.HTTP_200_OK)


class DetailOrderItemView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def get(self, request, id):
        item = get_object_or_404(
            OrderItem, id=id, order__customer__user=request.user
        )
        serializer = OrderItemSerializer(item, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class DeleteOrderItemView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def delete(self, request, id):
        item = get_object_or_404(
            OrderItem, id=id, order__customer__user=request.user
        )
        try:
            item.delete()
        except DatabaseError as e:
            logger.error(f"Database error during orderItem deletion: {e}")
            return Response(
                {"error": "unable to delete due to an internal error"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        return Response(status=status.HTTP_204_NO_CONTENT)