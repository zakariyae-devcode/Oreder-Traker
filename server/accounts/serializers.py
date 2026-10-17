from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken


#----------------------RegisterUser-------------#


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "first_name", "last_name", "cin",  "password"]
        
       
        extra_kwargs = {
            "username": {"required": True, "allow_blank": False},
            "first_name": {"required": True, "allow_blank": False},
            "last_name": {"required": True, "allow_blank": False},
            "email": {"required": True, "allow_blank": False},
            "cin": {"required": True, "allow_blank": False},
            
            "password": {"required": True, "allow_blank": False, "min_length": 8}
        }

    def create(self, validated_data):
       
        user = User.objects.create_user(**validated_data)
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [ "username", "email", "first_name", "last_name",  "cin"]


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "email",  "cin"]

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True, write_only=True)
    new_password = serializers.CharField(required=True, write_only=True)
    confirm_password = serializers.CharField(required=True, write_only=True)
    
    def validate(self, attrs):
        if attrs['new_password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "كلمات المرور الجديدة غير متطابقة."})
        return attrs

    def update(self, instance, validated_data):
        instance.set_password(validated_data['new_password'])
        instance.save()
        return instance


class EmailRestSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError("هذا البريد الإلكتروني غير مسجل لدينا.")
        return value

class ForgotPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    def validate(self, attrs):
       
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "كلمات المرور غير متطابقة."})
        return attrs
        
    def update(self, instance, validated_data):
       
        instance.set_password(validated_data['password'])
        instance.save()
        return instance
    

class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs

    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except Exception as e:
            raise serializers.ValidationError({"detail": "التوكن غير صالح أو منتهي الصلاحية."})
        return self.token
    
