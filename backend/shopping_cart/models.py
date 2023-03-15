from django.db import models
from authentication.models import User
from soda_product.models import Soda_product

# Create your models here.
class Shopping_cart(models.Model):
     user_id = models.ForeignKey(User, on_delete=models.CASCADE)
     product_id = models.ForeignKey(Soda_product, on_delete=models.CASCADE)
     quantity = models.IntegerField()
