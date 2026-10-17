from django.urls import path
from .views import CreateProductView,UpdateProductView,DeleteProductView,ProductView,ProductDetailsView

urlpatterns = [

    path("/create-product/",CreateProductView.as_view(),name="create-product"),
    path("/update-product/<uuid:id>",UpdateProductView.as_view(),name="update-product"),
    path("/delete-product/<uuid:id>",DeleteProductView.as_view(),name="delete-product"),
    path("/product-view/",ProductView.as_view(),name="product-view"),
    path("/product-detials/<uuid:id>",ProductDetailsView.as_view(),name="product-view")
]