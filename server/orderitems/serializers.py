
from rest_framework import serializers

from .models import  OrderItem


class OrderItemSerializer(serializers.ModelSerializer):
   
    selling_price = serializers.DecimalField(max_digits=10, decimal_places=2, required=False)
    purchase_price = serializers.DecimalField(max_digits=10, decimal_places=2, required=False)

    class Meta:
        model = OrderItem
        fields = ["id", "product", "quantity", "selling_price", "purchase_price"]

    def validate_product(self, product):
        if product.user != self.context["request"].user:
            raise serializers.ValidationError("This product does not belong to you.")
        return product

    def create(self, validated_data):
        product = validated_data["product"]
        validated_data.setdefault("selling_price", product.selling_price)
        validated_data.setdefault("purchase_price", product.purchase_price)
        return super().create(validated_data)

    def update(self, instance, validated_data):
        validated_data.pop("order", None)  
        return super().update(instance, validated_data)


