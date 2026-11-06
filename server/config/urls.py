
from django.contrib import admin
from django.urls import path,include




urlpatterns = [
    #superuser
    path('api/v1/manager-system/', admin.site.urls),
    #app
    path("api/v1/accounts/",include("accounts.urls")),
    path("api/v1/auth/",include("authentication.urls")),
    path("api/v1/customers/",include("customer.urls")),
    path("api/v1/products/",include("product.urls")),
    path("api/v1/orders/",include("orders.urls")),
    path("api/v1/order-items/",include("orderitems.urls")),
    path("api/v1/analytics/",include("analytics.urls")),
]
handler404='utils.error.handler_404'
handler500='utils.error.handler_500'