from django.urls import path

from .views import (
    CreateOrderItemView,
    DeleteOrderItemView,
    DetailOrderItemView,
    ListOrderItemView,
    UpdateOrderItemView,
)

urlpatterns = [
    path("order-items/", ListOrderItemView.as_view()),
    path("order-items/create/", CreateOrderItemView.as_view()),
    path("order-items/<int:id>/", DetailOrderItemView.as_view()),
    path("order-items/<int:id>/update/", UpdateOrderItemView.as_view()),
    path("order-items/<int:id>/delete/", DeleteOrderItemView.as_view()),
]