from django.urls import path

from .views import (
    CreateOrderView,
    DeleteOrderView,
    DetailOrderView,
    ListOrderView,
    UpdateOrderView,
    OrderWhatsAppView,
    OrderStatusView
)

urlpatterns = [
    path("list/", ListOrderView.as_view()),
    path("create/", CreateOrderView.as_view()),
    path("<uuid:id>/", DetailOrderView.as_view()),
    path("<uuid:id>/update/", UpdateOrderView.as_view()),
    path("<uuid:id>/delete/", DeleteOrderView.as_view()),
    path("<uuid:id>/whatsapp/",OrderWhatsAppView.as_view()),
    path("orders/<uuid:pk>/status/", OrderStatusView.as_view(), name="order-status"),
]