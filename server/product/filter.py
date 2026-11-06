import django_filters
from .models import Product
from django.db.models import Q
class ProductFilter(django_filters.FilterSet):
    search=django_filters.CharFilter(method="filter_search")
    class Meta:
        model = Product
        fields = ['name', "is_active"]

    def filter_search(self,queryset,name,value):
        return queryset.filter(
            Q(name__icontains=value) |
            Q(is_active__icontains=value)
        )