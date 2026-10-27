from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken


#----------------------RegisterUser-------------#


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "first_name", "last_name", "cin", "phone","city","address", "password"]
        
       
        extra_kwargs = {
            "username": {"required": True, "allow_blank": False},
            "first_name": {"required": True, "allow_blank": False},
            "last_name": {"required": True, "allow_blank": False},
            "email": {"required": True, "allow_blank": False},
            "cin": {"required": True, "allow_blank": False},
            "phone":{"required": True, "allow_blank": False},
            "city":{"required": True, "allow_blank": False},
            "address":{"required": True, "allow_blank": False},

            "password": {"required": True, "allow_blank": False, "min_length": 8}
        }

    def create(self, validated_data):
       
        user = User.objects.create_user(**validated_data)
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
       model = User
       fields = ["username", "email", "first_name", "last_name", "cin", "Phone","City","Address"]


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "first_name", "last_name", "cin", "Phone","City","Address", "password"]

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

