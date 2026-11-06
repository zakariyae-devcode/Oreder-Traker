from django.contrib import admin
from unfold.admin import ModelAdmin

from .models import Product

@admin.register(Product)
class ProductAdmin(ModelAdmin):
    list_display = ("name", "sellingPrice", "purchasePrice", "is_active", "user", "create_at")
    list_filter = ("is_active", "create_at")
    list_editable = ("is_active",)
    search_fields = ("name", "user__username")
    ordering = ("name",)
    readonly_fields = ("id", "create_at", "update_at")
    autocomplete_fields = ("user",)

    fieldsets = (
        (None, {"fields": ("id", "user", "name", "is_active")}),
        ("الأسعار", {"fields": ("purchasePrice", "sellingPrice")}),
        ("التواريخ", {"fields": ("create_at", "update_at")}),
    )
