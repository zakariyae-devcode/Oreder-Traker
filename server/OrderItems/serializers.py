from django.db import transaction
from rest_framework import serializers

from .models import  OrderItem


class OrderItemSerializer(serializers.ModelSerializer):
   
    selling_price = serializers.DecimalField(max_digits=10, decimal_places=2, required=False)
    purchase_price = serializers.DecimalField(max_digits=10, decimal_places=2, required=False)

    class Meta:
        model = OrderItem
        fields = [ "product", "quantity", "selling_price", "purchase_price"]

    def validate_product(self, product):
        if product.user != self.context["request"].user:
            raise serializers.ValidationError("This product does not belong to you.")
        return product


