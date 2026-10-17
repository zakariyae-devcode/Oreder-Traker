from django.urls import path
from  .views import (
        RegisterView,
        UserDetailView,
        UserUpdateView,
        ChangePasswordView,
        EmailResetView,
        ForgotPasswordView,
        LogoutView,
        
)


from rest_framework_simplejwt.views import (
    TokenObtainPairView,

)


urlpatterns = [
    
    path("register/", RegisterView.as_view(), name="register-view"),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
   
    path("user/", UserDetailView.as_view(), name="user-details-view"),
    path("user/update/", UserUpdateView.as_view(), name="user-update-view"),
    
    path("user/change-password/", ChangePasswordView.as_view(), name="change-password-view"),
    path("user/email-reset/", EmailResetView.as_view(), name="email-reset-view"),
    path("user/forgot-password/", ForgotPasswordView.as_view(), name="forgot-password-view"),
    path("user/logout/",LogoutView.as_view(), name="logout-view"),


  

]