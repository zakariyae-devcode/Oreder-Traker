from django.db import models
import uuid

from django.core.validators import MinValueValidator
from decimal import Decimal
class Status(models.TextChoices):
        NEW = "new", "New"
        CONFIRMED = "confirmed", "Confirmed"
        SHIPPED = "shipped", "Shipped"
        DELIVERED = "delivered", "Delivered"
        RETURNED = "returned", "Returned"

class Order(models.Model):
   

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) # المعرف الخاص بموديل
    customer = models.ForeignKey(
        "customer.Customer",
        on_delete=models.PROTECT,
        related_name="orders",
    )
    order_number = models.CharField(max_length=100, unique=True, blank=True, null=True) # رقم الطلب 

    shipping_cost = models.DecimalField(max_digits=8, decimal_places=2, default=0,
    validators=[MinValueValidator(Decimal("0"))])
                                        
    tracking_number = models.CharField(max_length=100,unique=True ,blank=True,null=True)  # رقم الشحن

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.NEW,
    )
    
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)


    def save(self,*args,**kwargs):
        if not self.order_number:
            self.order_number=f"OT-{uuid.uuid4().hex[:6].upper()}" 
       
        return super().save(*args,**kwargs)


    def __str__(self):
        return f"Order-{self.order_number}"


    


    

