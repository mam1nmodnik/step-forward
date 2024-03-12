from django.db import models

# Create your models here.

class Orders(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    price = models.CharField(max_length=255)