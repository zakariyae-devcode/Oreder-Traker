from django.urls import path
from  .views import (
        RegisterView,
        UserDetailView,
        UserUpdateView,
        ChangePasswordView,
        EmailResetView,
        ForgotPasswordView,
        LogoutView,
        LoginView,
        RefreshTokenView,
        VerifyTokenView
        
)


urlpatterns = [
    
    path("register/", RegisterView.as_view(), name="register-view"),
    path('login/',LoginView.as_view(),name="login-view" ),

    path("refresh/",RefreshTokenView.as_view(),name="refresh-token"),
    path("verify/",VerifyTokenView.as_view(),name="verify-token"),
   
    path("user/", UserDetailView.as_view(), name="user-details-view"),
    path("user/update/", UserUpdateView.as_view(), name="user-update-view"),
    
    path("user/change-password/", ChangePasswordView.as_view(), name="change-password-view"),
    path("user/email-reset/", EmailResetView.as_view(), name="email-reset-view"),
    path("user/forgot-password/", ForgotPasswordView.as_view(), name="forgot-password-view"),
    path("user/logout/",LogoutView.as_view(), name="logout-view"),


  

]