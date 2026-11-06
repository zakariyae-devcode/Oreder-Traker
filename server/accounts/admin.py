from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from unfold.admin import ModelAdmin
from unfold.forms import AdminPasswordChangeForm, UserChangeForm, UserCreationForm

from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin, ModelAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm

    list_display = ("username", "email", "cin", "phone", "city", "is_staff", "is_active", "created_at")
    list_filter = ("is_staff", "is_superuser", "is_active", "city")
    search_fields = ("username", "email", "cin", "phone", "city")
    ordering = ("-created_at",)
    readonly_fields = ("id", "created_at", "updated_at", "last_login", "date_joined")

    fieldsets = (
        (None, {"fields": ("id", "username", "password")}),
        ("المعلومات الشخصية", {"fields": ("first_name", "last_name", "email", "cin", "phone", "city", "address")}),
        ("الصلاحيات", {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("التواريخ", {"fields": ("last_login", "date_joined", "created_at", "updated_at")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("username", "email", "password1", "password2", "cin", "phone", "city", "address"),
        }),
    )
