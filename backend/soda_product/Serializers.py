
from rest_framework import serializers
from .models import Soda_product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soda_product
        fields = [ 'id', 'image', 'product', 'description', 'price', 'size', 'flavor', 'stock']