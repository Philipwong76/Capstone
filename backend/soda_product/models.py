from django.db import models

# Create your models here.
class Soda_product(models.Model):
    product = models.CharField(max_length=255)
    price = models.IntegerField()
    size = models.CharField(max_length=255)
    flavor = models.CharField(max_length=255)
