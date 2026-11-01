from django.utils import timezone
import logging
from django.db import DatabaseError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.throttling import UserRateThrottle


# Create your views here.
from .models import User
from .serializers import (
    UserRegisterSerializer,
    UserSerializer,
    UserUpdateSerializer
   )

logger = logging.getLogger(__name__)

#---------------------------------------------------------#
#-------------------- Accounts ---------------------#
#---------------------------------------------------------#


class RegisterView(APIView):
    """إنشاء حساب مستخدم جديد بأمان"""
    permission_classes=[AllowAny]
    def post(self, request):
        try:
            print("REGISTER VIEW HIT")
            serializer = UserRegisterSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "user created successfully"}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except DatabaseError as e:
            logger.error(f"[SECURITY] Database error during registration: {str(e)}")
            return Response({"error": "An unexpected error occurred while processing the request"}, 
            status=status. HTTP_500_INTERNAL_SERVER_ERROR)

class UserDetailView(APIView):
    """جلب بيانات المستخدم الحالي الآمن"""
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]
   
    def get(self, request):
        try:
            serializer = UserSerializer(request.user)
            return Response({"User": serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(f"[SECURITY] Error retrieving user details: {str(e)}")
            return Response({"error": "حدث خطأ داخلي في الخادم."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UserUpdateView(APIView):
    """تحديث بيانات المستخدم الحالي جزئياً بأمان"""
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]
   
    def patch(self, request):
        try:
            serializer = UserUpdateSerializer(request.user, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "user updated successfully"}, status=status.HTTP_200_OK)
            logger.info()
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except DatabaseError as e:
            logger.error(f"[SECURITY] Database error during user update: {str(e)}")
            return Response({"error": "unable to update due to an internal error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UserDeleteView(APIView):
    """المستخدم يطلب حذف حسابه (يُقفل فوراً وتبدأ مهلة الـ 30 يوماً)"""
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]
    
    def delete(self, request):
        user = request.user
        password = request.data.get("password")
        
        # التأكد من كلمة المرور أمنياً قبل القفل
        if not password or not user.check_password(password):
            return Response({"error": "كلمة المرور غير صحيحة، تعذر بدء عملية الحذف."}, status=status.HTTP_400_BAD_REQUEST)
        
        # قفل الحساب وبدء فترة السماح (30 يوماً)
        user.is_active = False
        user.deletion_requested_at = timezone.now()
        user.save()
        
        return Response({
            "message": "تم قفل حسابك بنجاح. لديك مهلة 30 يوماً لاسترجاعه عبر تسجيل الدخول، بعد ذلك سيتم حذفه نهائياً ولن تتمكن من استعادته."
        }, status=status.HTTP_200_OK)





