from rest_framework import serializers
from .models import Product

class ProductSerialier(serializers.ModelSerializer):
    model = Product
    fields = ["id","name", "sellingPrice", "purchasePrice", "is_active"]


   

class CreateProductSerializers(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ["name", "sellingPrice", "purchasePrice", "is_active"]
            
           
        extra_kwargs = {
            "name": {"required": True, "allow_blank": False},
            "sellingPrice": {"required": True, "allow_blank": False},
            "purchasePrice": {"required": True, "allow_blank": False},
            "is_active":{"required": False},
            
        }
    
        def create(self, validated_data):
           
            product = Product.objects.create(**validated_data)
            return product

class UpdateProductSerialier(serializers.ModelSerializer):
    model = Product
    fields = ["name", "sellingPrice", "purchasePrice", "is_active"]


    def update(self, instance, validated_data):
        for attr,value in validated_data.items():
              setattr(instance,attr,value)
        instance.save()
