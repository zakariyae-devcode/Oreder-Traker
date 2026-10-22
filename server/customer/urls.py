from django.urls import path
from .views import (
    CreateCustomerView,
    UpdateCustomerView,
    DeleteCustomerView,
    ListCustomerView,
    DetailCustomerView
    )

urlpatterns = [

    path("list/",ListCustomerView.as_view(),name="customer-view"),
    path("<uuid:id>/",DetailCustomerView.as_view(),name="customer-view"),
    path("create/",CreateCustomerView.as_view(),name="create-customer"),
    path("<uuid:id>/update/",UpdateCustomerView.as_view(),name="update-customer"),
    path("<uuid:id>/delete/",DeleteCustomerView.as_view(),name="delete-customer"),
    
]