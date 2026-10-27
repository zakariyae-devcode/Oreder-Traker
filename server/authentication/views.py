import logging
from django.core.mail import send_mail
from django.conf import settings
from django.db import DatabaseError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.throttling import ScopedRateThrottle,UserRateThrottle
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView,TokenVerifyView

# Create your views here.
from django.contrib.auth.models import User
from .serializers import (
    
    ChangePasswordSerializer,
    EmailRestSerializer,
    LogoutSerializer,
    ForgotPasswordSerializer)

logger = logging.getLogger(__name__)

#---------------------------------------------------------#
#-------------------- Authentication ---------------------#
#---------------------------------------------------------#


class LoginView(TokenObtainPairView):
    permission_classes = [AllowAny]
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "login"

class RefreshTokenView(TokenRefreshView):
    permission_classes = [AllowAny]
    throttle_classes=[UserRateThrottle]


class VerifyTokenView(TokenVerifyView):
    permission_classes=[AllowAny]
    throttle_classes=[UserRateThrottle]



class ChangePasswordView(APIView): 
    """تغيير كلمة المرور للمستخدم المسجل"""
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]
   
    def put(self, request):
        try:
            serializer = ChangePasswordSerializer(request.user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "password updated successfully"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error(f"[SECURITY] Error during password change: {str(e)}")
            return Response({"error": "فشلت العملية بسبب خطأ غير متوقع."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class EmailResetView(APIView):
    """إرسال رابط استعادة كلمة المرور مع حماية ضد الـ User Enumeration"""
    permission_classes = [AllowAny]
    throttle_classes=[UserRateThrottle]
   
    def post(self, request):
        serializer = EmailRestSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            
            # أمنياً: نرجع دائماً نفس الرد بنجاح العملية حتى لو كان الإيميل غير موجود
            # لمنع المخترقين من جرد وفحص الإيميلات المسجلة في قاعدتك
            generic_success_response = Response(
                {"message": "إذا كان البريد الإلكتروني مسجلاً لدينا، ستتلقى رابطاً لإعادة تعيين كلمة المرور قريباً."}, 
                status=status.HTTP_200_OK
            )
            
            try:
                user = User.objects.get(email=email)
                frontend_url = getattr(settings, 'FRONTEND_URL', 'http://localhost:3000')
                reset_link = f"{frontend_url}/reset-password?user_cin={user.cin}"
                
                try:
                    send_mail(
                        subject='إعادة تعيين كلمة المرور - منصة مناسباتي',
                        message=f'مرحباً {user.username}، لإعادة تعيين كلمة المرور الخاصة بك، يرجى الضغط على الرابط التالي: {reset_link}',
                        from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', 'no-reply@order-Tracker.ma'),
                        recipient_list=[email],
                        fail_silently=False,
                    )
                except Exception as mail_err:
                    logger.error(f"[SECURITY] SMTP Mail delivery failed: {str(mail_err)}")
                    # لا نخبر المستخدم بفشل السيرفر للحفاظ على سرية البنية التحتية
                    return generic_success_response

                return generic_success_response
                
            except User.DoesNotExist:
                # إرجاع نفس الرد الآمن حماية للمنصة
                return generic_success_response
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ForgotPasswordView(APIView):
    """إعادة تعيين كلمة المرور باستخدام الـ CIN بشكل معقم ومحمي"""
    permission_classes = [AllowAny]
    throttle_classes=[UserRateThrottle]
    
    def post(self, request): 
        serializer = ForgotPasswordSerializer(data=request.data)
        if serializer.is_valid():
            user_cin = serializer.validated_data.get('user_cin')
            if not user_cin:
                return Response({"error": "المعرف الفريد مطلوب."}, status=status.HTTP_400_BAD_REQUEST)
            try:
                user = User.objects.get(cin=user_cin)
                user.set_password(serializer.validated_data['password'])
                user.save()
                return Response({"message": "تمت إعادة تعيين كلمة المرور بنجاح! يمكنك الآن تسجيل الدخول."}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                # رد مبهم لحماية الخصوصية في حال التخمين العشوائي للـ CIN
                return Response({"error": "البيانات الممررة غير مطابقة للنظام."}, status=status.HTTP_400_BAD_REQUEST)
            except DatabaseError as e:
                logger.error(f"[SECURITY] Database error during password reset: {str(e)}")
                return Response({"error": "حدث خطأ داخلي أثناء معالجة الطلب."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    """تسجيل الخروج الآمن"""
    permission_classes = [IsAuthenticated]
    throttle_classes=[UserRateThrottle]
   
    def post(self, request):
        try:
            serializer = LogoutSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "user logged out successfully"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error(f"[SECURITY] Logout failure block: {str(e)}")
            return Response({"error": "فشلت معالجة الطلب."}, status=status.HTTP_400_BAD_REQUEST)