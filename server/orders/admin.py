from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline

from .models import Order
from orderitems.models import OrderItem  # غيّر orderitem إلى اسم التطبيق الفعلي


class OrderItemInline(TabularInline):
    model = OrderItem
    extra = 0
    fields = ("product", "quantity", "sellingPrice", "purchasePrice")
    raw_id_fields = ("product",)


@admin.register(Order)
class OrderAdmin(ModelAdmin):
    inlines = [OrderItemInline]

    list_display = ("order_number", "customer", "status", "shipping_cost", "tracking_number", "create_at")
    list_filter = ("status", "create_at")
    list_editable = ("status",)
    search_fields = ("order_number", "tracking_number", "customer__FullName", "customer__email")
    ordering = ("-create_at",)
    readonly_fields = ("id", "order_number", "create_at", "update_at")
    raw_id_fields = ("customer",)

    fieldsets = (
        (None, {"fields": ("id", "order_number", "customer", "status")}),
        ("الشحن", {"fields": ("shipping_cost", "tracking_number")}),
        ("التواريخ", {"fields": ("create_at", "update_at")}),
    )
