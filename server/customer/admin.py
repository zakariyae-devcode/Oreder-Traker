from .models import Customer
from unfold.admin import ModelAdmin
from django.contrib import admin

@admin.register(Customer)
class CustomerAdmin(ModelAdmin):
    list_display = ("FullName", "email", "cin", "Phone", "City", "user", "create_at")
    list_filter = ("City", "create_at")
    search_fields = ("FullName", "email", "cin", "Phone", "City", "user__username")
    ordering = ("-create_at",)
    readonly_fields = ("id", "create_at", "update_at")
    autocomplete_fields = ("user",)

    fieldsets = (
        (None, {"fields": ("id", "user", "FullName", "cin", "email")}),
        ("معلومات الاتصال", {"fields": ("Phone", "City", "Address")}),
        ("التواريخ", {"fields": ("create_at", "update_at")}),
    )
