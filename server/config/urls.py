
from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework_simplejwt.views import TokenVerifyView
urlpatterns = [
    path('api/v1/admin/', admin.site.urls),

    #authentication
    path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('aapi/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
