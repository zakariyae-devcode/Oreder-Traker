from django.shortcuts import get_object_or_404
import logging
from django.db import DatabaseError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import Customer

from .serializers import CreateCustomerSerializer,UpdateCustomerSerialier,CustomerSerializer


from .filter import CustomerFilter

logger = logging.getLogger(__name__)



#---------------------------------------------------------#
#-------------------- System Customer---------------------#
#---------------------------------------------------------#

class CreateCustomerView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            print("AUTH HEADER:", request.META.get("HTTP_AUTHORIZATION"))
            serializer = CreateCustomerSerializer(data=request.data)
            
            if serializer.is_valid():
                serializer.save(user=request.user)
               
                return Response({"message": "customer created successfully"}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        except DatabaseError as e:
         
            logger.error(f"[SECURITY] Database error during customer creation: {str(e)}")
           
            return Response(
                {"error": "An unexpected error occurred while processing the request"}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class UpdateCustomerView(APIView):
    permission_classes = [IsAuthenticated]
    
    def patch(self, request, id):
        try:
            customer = get_object_or_404(Customer, id=id, user=request.user)
            
            serializer = UpdateCustomerSerialier(customer, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "customer updated successfully"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except DatabaseError as e:
            logger.error(f"[SECURITY] Database error during customer update: {str(e)}")
            return Response({"error": "unable to update due to an internal error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class DeleteCustomerView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, id):
        try:
            service = get_object_or_404(Customer, id=id, user=request.user)
            service.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except DatabaseError as e:
            logger.error(f"[SECURITY] Database error during customer deletion: {str(e)}")
            return Response({"error": "فشلت العملية بسبب قيود حماية قاعدة البيانات."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ListCustomerView(APIView):
   
    permission_classes=[IsAuthenticated]
    def get(self, request):
        try:
           
            queryset =Customer.objects.all()
            
            
            filter_backend = CustomerFilter(request.GET, queryset=queryset)
            
           
            if filter_backend.is_valid():
                queryset = filter_backend.qs
            else:
                return Response(filter_backend.errors, status=status.HTTP_400_BAD_REQUEST)
            
           
            customer = queryset.only("FullName", "email", "cin", "City" ,"Address")
            
           
            serializer = CustomerSerializer(customer, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"[SECURITY] Fetch customer list failed: {str(e)}")
            return Response(
                {"error": "تعذر جلب البيانات المطلوبة حالياً."}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class DetailCustomerView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        customer = get_object_or_404(Customer, id=id, user=request.user)
        serializer = CustomerSerializer(customer)
        return Response(serializer.data, status=status.HTTP_200_OK)