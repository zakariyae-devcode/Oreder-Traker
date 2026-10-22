
from django.contrib import admin
from django.urls import path,include




urlpatterns = [
    #superuser
    path('api/v1/manager-system/', admin.site.urls),
    #app
    path("api/v1/account/",include("accounts.urls")),
    path("api/v1/customer/",include("customer.urls")),
    path("api/v1/product/",include("product.urls")),
    path("api/v1/order/",include("orders.urls")),
    path("api/v1/order-items/",include("orderitems.urls")),
]
handler404='utils.error.handler_404'
handler500='utils.error.handler_500'