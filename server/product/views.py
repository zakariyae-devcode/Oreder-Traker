from django.shortcuts import get_object_or_404
import logging
from django.db import DatabaseError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import  Product

from .serializers import  CreateProductSerializers,UpdateProductSerialier,ProductSerialier


from .filter import ProductFilter

logger = logging.getLogger(__name__)



#---------------------------------------------------------#
#-------------------- System Product---------------------#
#---------------------------------------------------------#
class CreateCustomerView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            
            serializer = CreateProductSerializers(data=request.data)
            
            if serializer.is_valid():
                serializer.save()
               
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
    
    def patch(self, request, id):
        try:
            product = get_object_or_404(Product, id=id, user=request.user)
            
            serializer = UpdateProductSerialier(product, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "product updated successfully"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except DatabaseError as e:
            logger.error(f"[SECURITY] Database error during product update: {str(e)}")
            return Response({"error": "unable to update due to an internal error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class DeleteProductView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, id):
        try:
            service = get_object_or_404(Product, id=id, user=request.user)
            service.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except DatabaseError as e:
            logger.error(f"[SECURITY] Database error during Product deletion: {str(e)}")
            return Response({"error": "فشلت العملية بسبب قيود حماية قاعدة البيانات."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CustomerView(APIView):
   
    permission_classes=[IsAuthenticated]
    def get(self, request):
        try:
           
            queryset =Product.objects.all()
            
            
            filter_backend = ProductFilter(request.GET, queryset=queryset)
            
           
            if filter_backend.is_valid():
                queryset = filter_backend.qs
            else:
                return Response(filter_backend.errors, status=status.HTTP_400_BAD_REQUEST)
            
           
            product = queryset.only('name', 'sellingPrice','purchasePrice',"is_active")
            
           
            serializer = ProductSerialier(product, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"[SECURITY] Fetch  product list failed: {str(e)}")
            return Response(
                {"error": "تعذر جلب البيانات المطلوبة حالياً."}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class ProductDetailsView(APIView):
    
    permission_classes = [IsAuthenticated]
    
    def get(self, request, id):
        try:
            
            product = get_object_or_404(Product, id=id)
            
           
            queryset = Product.objects.filter( product=product)
            
           
            serializer = ProductSerialier(queryset, many=True)
            
            return Response(
                {"services": serializer.data}, 
                status=status.HTTP_200_OK
            )
            
        except Exception as e:
            logger.error(f"Error retrieving product for user {id}: {str(e)}")
            return Response(
                {"error": "حدث خطأ داخلي في الخادم."}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
