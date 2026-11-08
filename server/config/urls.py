
from django.contrib import admin
from django.urls import path,include

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView


urlpatterns = [


    path('api/v1/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/v1/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/v1/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

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