from django.db import models
import uuid
from django.core.validators import RegexValidator
from django.contrib.auth.models import AbstractUser,BaseUserManager


cin_validator = RegexValidator(
    regex=r'^[A-Z]{1,2}[0-9]{5,6}$',
    message='رقم بطاقة التعريف الوطنية غير صالح. يجب أن يبدأ بحرف أو حرفين كبيرين يليهما 5 إلى 6 أرقام.'
)

class CustomUserManager(BaseUserManager):
    """
    مدير مخصص لنموذج المستخدم للتحكم في كيفية إنشاء المستخدم العادي والمشرف (Superuser).
    """
    def create_user(self, username, email=None, password=None, **extra_fields):
        if not username:
            raise ValueError('اسم المستخدم (username) إلزامي.')
        
        if email:
            email = self.normalize_email(email)
            
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)  # لتشفير كلمة المرور بأمان
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('يجب أن يحتوي المشرف (Superuser) على is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('يجب أن يحتوي المشرف (Superuser) على is_superuser=True.')

        return self.create_user(username, email, password, **extra_fields)


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    cin = models.CharField(
            max_length=10, 
            validators=[cin_validator],
            unique=True,
            null=True, 
            blank=True
        )
    Phone=models.CharField(max_length=255 ,default="+212 00000006")
    City=models.CharField(max_length=255,default="Taourirt")
    Address=models.TextField(blank=True,default="BDV Hay 20 Auto Taourirt")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.username



    
