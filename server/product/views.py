from django.shortcuts import get_object_or_404
import logging
from django.db import DatabaseError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import  Product

from .serializers import  CreateProductSerializers,UpdateProductSerializer,ProductSerializer
from rest_framework.throttling import UserRateThrottle

from .filter import ProductFilter

logger = logging.getLogger(__name__)



#---------------------------------------------------------#
#-------------------- System Product---------------------#
#---------------------------------------------------------#
class CreateProductView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def post(self, request):
        try:
            
            serializer = CreateProductSerializers(data=request.data)
            
            if serializer.is_valid():
                serializer.save(user=request.user)
               
                return Response({"message": "product created successfully"}, status=status.HTTP_201_CREATED)
            
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        except DatabaseError as e:
         
            logger.error(f"[SECURITY] Database error during product creation: {str(e)}")
           
            return Response(
                {"error": "An unexpected error occurred while processing the request"}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class UpdateProductView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]
    
    def patch(self, request, id):
        try:
            product = get_object_or_404(Product, id=id, user=request.user)
            
            serializer = UpdateProductSerializer(product, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response({"message": "product updated successfully"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except DatabaseError as e:
            logger.error(f"[SECURITY] Database error during product update: {str(e)}")
            return Response({"error": "unable to update due to an internal error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class DeleteProductView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]
    
    def delete(self, request, id):
        try:
            service = get_object_or_404(Product, id=id, user=request.user)
            service.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except DatabaseError as e:
            logger.error(f"[SECURITY] Database error during Product deletion: {str(e)}")
            return Response({"error": "فشلت العملية بسبب قيود حماية قاعدة البيانات."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class  ListProductView(APIView):
   
    permission_classes=[IsAuthenticated]
    throttle_classes=[UserRateThrottle]
    
    def get(self, request):
        try:
            print("hello,word")
           
            queryset = Product.objects.filter(user=request.user)
            
            
            filter_backend = ProductFilter(request.GET, queryset=queryset)
            
           
            if filter_backend.is_valid():
                queryset = filter_backend.qs
            else:
                return Response(filter_backend.errors, status=status.HTTP_400_BAD_REQUEST)
            
           
            product = queryset.only('name', 'sellingPrice','purchasePrice',"is_active")
            
           
            serializer = ProductSerializer(product, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"[SECURITY] Fetch  product list failed: {str(e)}")
            return Response(
                {"error": "تعذر جلب البيانات المطلوبة حالياً."}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class DetailProductView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]

    def get(self, request, id):
        customer = get_object_or_404(Product, id=id, user=request.user)
        serializer = ProductSerializer(customer)
        return Response(serializer.data, status=status.HTTP_200_OK)
