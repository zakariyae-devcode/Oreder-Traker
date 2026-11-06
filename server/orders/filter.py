import django_filters
from django.db.models import Q
from .models import Order


class OrderFilter(django_filters.FilterSet):
    search = django_filters.CharFilter(method="filter_search")
    created_from = django_filters.DateFilter(field_name="created_at", lookup_expr="date__gte")
    created_to = django_filters.DateFilter(field_name="created_at", lookup_expr="date__lte")

    class Meta:
        model = Order
        fields = ["status", "customer"]

    def filter_search(self, queryset, name, value):
        return queryset.filter(
            Q(order_number__icontains=value)
            | Q(customer__FullName__icontains=value)
            | Q(customer__cin__icontains=value)
            | Q(orderitem__product__name__icontains=value)
        ).distinct()