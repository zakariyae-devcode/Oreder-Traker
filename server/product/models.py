from django.db import models
from django.conf import settings
# Create your models here.

import uuid

class Product(models.Model):
    id=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.PROTECT,related_name="produts")
    name=models.CharField(max_length=255)
    sellingPrice=models.DecimalField(max_digits=6 ,decimal_places=2)
    purchasePrice=models.DecimalField(max_digits=6,decimal_places=2)
    is_active=models.BooleanField(default=False)


    create_at=models.DateTimeField(auto_now=True)
    update_at=models.DateTimeField(auto_now_add=True)
        
        
    def __str__(self):
                return self.name