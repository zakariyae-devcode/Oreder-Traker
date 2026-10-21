from django.urls import path
from .views import (
    CreateCustomerView,
    UpdateCustomerView,
    DeleteCustomerView,
    ListCustomerView,
    DetailCustomerView
    )

urlpatterns = [

    path("list-customer/",ListCustomerView.as_view(),name="customer-view"),
    path("<uuid:id>/",DetailCustomerView.as_view(),name="customer-view"),
    path("create-customer/",CreateCustomerView.as_view(),name="create-customer"),
    path("<uuid:id>/update-customer/",UpdateCustomerView.as_view(),name="update-customer"),
    path("<uuid:id>/delete-customer/",DeleteCustomerView.as_view(),name="delete-customer"),
    
]