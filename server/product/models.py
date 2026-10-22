from django.db import models
from django.conf import settings
# Create your models here.

import uuid
from django.core.validators import MinValueValidator
from decimal import Decimal
class Product(models.Model):
    id=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.PROTECT,related_name="produts")
    name=models.CharField(max_length=255)

    sellingPrice=models.DecimalField(max_digits=10 ,decimal_places=2, 
    validators=[MinValueValidator(Decimal("0"))])

    purchasePrice=models.DecimalField(max_digits=10,decimal_places=2,validators=[MinValueValidator(Decimal("0"))])
    
    is_active=models.BooleanField(default=False)


    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
        
        
    def __str__(self):
                return self.name