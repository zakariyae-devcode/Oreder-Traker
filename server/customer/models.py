from django.db import models
from django.core.validators import RegexValidator
import uuid
from django.conf import settings
cin_validator = RegexValidator(
    regex=r'^[A-Z]{1,2}[0-9]{5,6}$',
    message='رقم بطاقة التعريف الوطنية غير صالح. يجب أن يبدأ بحرف أو حرفين كبيرين يليهما 5 إلى 6 أرقام.'
)

class Customer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.PROTECT,related_name="customers")
    FullName=models.CharField(max_length=255)
    cin = models.CharField(
            max_length=10, 
            validators=[cin_validator],
            unique=True,
            null=True, 
            blank=True
        )
    email=models.EmailField(max_length=255,unique=True)
    Phone=models.CharField(max_length=255 ,default="+212 00000006")
    City=models.CharField(max_length=255,default="Taourirt")
    Address=models.TextField(blank=True,default="BDV Hay 20 Auto Taourirt")

    create_at=models.DateTimeField(auto_now_add=True)
    update_at=models.DateTimeField(auto_now=True)

   
    
    
    
    def __str__(self):
            return self.FullName


