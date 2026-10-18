from django.db import transaction
from rest_framework import serializers

from .models import Order

from OrderItems.serializers import OrderItemSerializer
from OrderItems.models import OrderItem




class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    profit = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = [
           "id", "customer", "shipping_cost", "tracking_number",
            "status", "items", "profit", "created_at", "updated_at",
        ]
        read_only_fields = ["created_at", "updated_at"]

    def validate_customer(self, customer):
        if customer.user != self.context["request"].user:
            raise serializers.ValidationError("This customer does not belong to you.")
        return customer

    def validate_items(self, items):
        if not items:
            raise serializers.ValidationError("The order must have at least one item.")
        return items

    def get_profit(self, obj):
        if obj.status == Order.Status.DELIVERED:
            total = sum(
                (i.selling_price - i.purchase_price) * i.quantity
                for i in obj.items.all()
            )
            return total - obj.shipping_cost
        if obj.status == Order.Status.RETURNED:
            return - obj.shipping_cost
        return None  

    def _create_items(self, order, items_data):
        for item in items_data:
            product = item["product"]
            item.setdefault("selling_price", product.selling_price)
            item.setdefault("purchase_price", product.purchase_price)
            OrderItem.objects.create(order=order, **item)

    @transaction.atomic
    def create(self, validated_data):
        items_data = validated_data.pop("items")
        order = Order.objects.create(**validated_data)
        self._create_items(order, items_data)
        return order

    @transaction.atomic
    def update(self, instance, validated_data):
        items_data = validated_data.pop("items", None)
        instance = super().update(instance, validated_data)
        if items_data is not None:
            instance.items.all().delete()
            self._create_items(instance, items_data)
        return instance