from django.db import models

# Create your models here.
class Soda_product(models.Model):
    image = models.ImageField(null=True, blank=True)
    product = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    price = models.IntegerField()
    size = models.CharField(max_length=255)
    flavor = models.CharField(max_length=255)
    stock = models.IntegerField()
