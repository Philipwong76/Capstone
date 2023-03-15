from django.db import models
from authentication.models import User
from soda_product.models import Soda_product

# Create your models here.
class Review(models.Model):
     review_user_id = models.ForeignKey(User, on_delete=models.CASCADE)
     review_product_id = models.ForeignKey(Soda_product, on_delete=models.CASCADE)
     comment = models.CharField(max_length=500)