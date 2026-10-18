
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenRefreshView

from rest_framework_simplejwt.views import TokenVerifyView



urlpatterns = [
    #superuser
    path('api/v1/admin/', admin.site.urls),
    #token
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    #app
    path("api/v1/account/",include("accounts.urls")),
    path("api/v1/customer/",include("customer.urls")),
    path("api/v1/product/",include("product.urls")),
    path("api/v1/order/",include("orders.urls")),
    path("api/v1/order-items/",include("orderitems.urls")),
]
handler404='utils.error.handler_404'
handler500='utils.error.handler_500'