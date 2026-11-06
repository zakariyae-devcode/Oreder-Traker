from django.contrib import admin
from unfold.admin import ModelAdmin

from .models import OrderItem


@admin.register(OrderItem)
class OrderItemAdmin(ModelAdmin):
    list_display = ("order", "product", "quantity", "sellingPrice", "purchasePrice", "created_at")
    list_filter = ("created_at",)
    search_fields = ("product__name", "order__order_number")
    ordering = ("-created_at",)
    readonly_fields = ("id", "created_at", "updated_at")
    raw_id_fields = ("order", "product")

    fieldsets = (
        (None, {"fields": ("id", "order", "product", "quantity")}),
        ("الأسعار عند الطلب", {"fields": ("sellingPrice", "purchasePrice")}),
        ("التواريخ", {"fields": ("created_at", "updated_at")}),
    )
