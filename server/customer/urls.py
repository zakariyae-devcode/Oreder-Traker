from django.urls import path
from .views import CreateCustomerView,UpdateCustomerView,DeleteCustomerView,CustomerView,CustomerDetailsView

urlpatterns = [

    path("/create-customer/",CreateCustomerView.as_view(),name="create-customer"),
    path("/update-customer/<uuid:id>",UpdateCustomerView.as_view(),name="update-customer"),
    path("/delete-customer/<uuid:id>",DeleteCustomerView.as_view(),name="delete-customer"),
    path("/customer-view/",CustomerView.as_view(),name="customer-view"),
    path("customer-detials/<uuid:id>",CustomerDetailsView.as_view(),name="customer-view")
]