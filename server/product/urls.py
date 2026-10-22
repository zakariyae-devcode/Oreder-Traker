from django.urls import path
from .views import (
    CreateProductView,
    UpdateProductView,
    DeleteProductView,
    ListProductView,
    DetailProductView)

urlpatterns = [

    path("list/", ListProductView.as_view(),name="product-view"),
    path("<uuid:id>/",DetailProductView.as_view(),name="product-view"),
    path("create/",CreateProductView.as_view(),name="create-product"),
    path("<uuid:id>/update/",UpdateProductView.as_view(),name="update-product"),
    path("<uuid:id>/delete/",DeleteProductView.as_view(),name="delete-product"),
   
   
]