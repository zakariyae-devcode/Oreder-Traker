import django_filters

from .models import Customer
from django.db.models import Q

class CustomerFilter(django_filters.FilterSet):
    search=django_filters.CharFilter(method="filter_search")
    class Meta:
        model=Customer
        fields=["cin",'FullName',"City","email"]

    def filter_search(self,queryset,name,value):
        return queryset.filter(
            Q(cin__icontains=value)
            | Q(FullName__icontains=value)
            | Q(City__icontains=value)
            | Q(email__icontains=value)
        )
    
      