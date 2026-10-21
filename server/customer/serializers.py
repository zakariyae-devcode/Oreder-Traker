from rest_framework import serializers
from .models import Customer


class CustomerSerializer(serializers.ModelSerializer):
     class Meta:
            model = Customer
            fields = ["id","FullName", "email", "cin", "Phone","City","Address"]

class CreateCustomerSerializer(serializers.ModelSerializer):
  

    class Meta:
        model = Customer
        fields = ["FullName", "email", "cin", "Phone","City","Address"]
        
       
        extra_kwargs = {
            "FullName": {"required": True, "allow_blank": False},
            "email": {"required": True, "allow_blank": False},
            "cin": {"required": True, "allow_blank": False},
            "Phone":{"required": True, "allow_blank": False},
            "City":{"required": True, "allow_blank": False},
            "Address":{"required": True, "allow_blank": False},
        }

    def create(self, validated_data):
       
        user_customer = Customer.objects.create(**validated_data)
        return user_customer

class UpdateCustomerSerialier(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["FullName", "email", "cin", "Phone","City","Address"]


    def update(self, instance, validated_data):
        for attr,value in validated_data.items():
              setattr(instance,attr,value)
        instance.save()

        return instance

        
