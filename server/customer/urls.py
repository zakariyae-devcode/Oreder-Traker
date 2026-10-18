from django.urls import path
from .views import (
    CreateCustomerView,
    UpdateCustomerView,
    DeleteCustomerView,
    ListCustomerView,
    DetailCustomerView
    )

urlpatterns = [

    path("customer/",ListCustomerView.as_view(),name="customer-view"),
    path("customer/<uuid:id>/",DetailCustomerView.as_view(),name="customer-view"),
    path("create/customer/",CreateCustomerView.as_view(),name="create-customer"),
    path("customer/<uuid:id>/update/",UpdateCustomerView.as_view(),name="update-customer"),
    path("customer/<uuid:id>delete/",DeleteCustomerView.as_view(),name="delete-customer"),
    
]