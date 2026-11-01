from django.urls import path

from .views import (
    CreateOrderItemView,
    DeleteOrderItemView,
    DetailOrderItemView,
    ListOrderItemView,
    UpdateOrderItemView,
)

urlpatterns = [
    path("list/", ListOrderItemView.as_view()),
    path("create/", CreateOrderItemView.as_view()),
    path("<uuid:id>/", DetailOrderItemView.as_view()),
    path("<uuid:id>update/", UpdateOrderItemView.as_view()),
    path("<uuid:id>/delete/", DeleteOrderItemView.as_view()),
]