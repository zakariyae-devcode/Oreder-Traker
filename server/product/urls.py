from django.urls import path
from .views import (
    CreateProductView,
    UpdateProductView,
    DeleteProductView,
    ListProductView,
    DetailProductView)

urlpatterns = [

    path("product/", ListProductView.as_view(),name="product-view"),
    path("product/<uuid:id>/",DetailProductView.as_view(),name="product-view"),
    path("product/create/",CreateProductView.as_view(),name="create-product"),
    path("product/<uuid:id>/update/",UpdateProductView.as_view(),name="update-product"),
    path("product/<uuid:id>/delete/",DeleteProductView.as_view(),name="delete-product"),
   
   
]