from django.urls import path
from  .views import (
        
        ChangePasswordView,
        EmailResetView,
        ForgotPasswordView,
        LogoutView,
        LoginView,
        RefreshTokenView,
        VerifyTokenView
        
)


urlpatterns = [
    
  
    path('login/',LoginView.as_view(),name="login-view" ),
    path("refresh/",RefreshTokenView.as_view(),name="refresh-token"),
    path("verify/",VerifyTokenView.as_view(),name="verify-token"),
    path("change-password/", ChangePasswordView.as_view(), name="change-password-view"),
    path("email-reset/", EmailResetView.as_view(), name="email-reset-view"),
    path("forgot-password/", ForgotPasswordView.as_view(), name="forgot-password-view"),
    path("logout/",LogoutView.as_view(), name="logout-view"),

]