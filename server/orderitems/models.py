from django.db import models
import uuid
from orders.models import Order
from django.core.validators import MinValueValidator
from decimal import Decimal
# Create your models here.
class OrderItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name="items",
    )
    product = models.ForeignKey(
        "product.Product",
        on_delete=models.PROTECT,
        related_name="order_items",
    )
    quantity = models.PositiveIntegerField(default=1)

    sellingPrice=models.DecimalField(max_digits=10 ,decimal_places=2, 
       validators=[MinValueValidator(Decimal("0"))])
   
    purchasePrice=models.DecimalField(max_digits=10,decimal_places=2,validators=[MinValueValidator(Decimal("0"))])

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.product} x {self.quantity}"