from django.urls import path

from .views import (
    CreateOrderView,
    DeleteOrderView,
    DetailOrderView,
    ListOrderView,
    UpdateOrderView,
)

urlpatterns = [
    path("orders/", ListOrderView.as_view()),
    path("orders/create/", CreateOrderView.as_view()),
    path("orders/<uuid:id>/", DetailOrderView.as_view()),
    path("orders/<uuid:id>/update/", UpdateOrderView.as_view()),
    path("orders/<uuid:id>/delete/", DeleteOrderView.as_view()),
]