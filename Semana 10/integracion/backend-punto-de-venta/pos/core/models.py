from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    usu_nom = models.CharField(max_length=50)
    usu_ape= models.CharField(max_length=50)
    usu_tipo= models.CharField(max_length=50)

class Mesa(models.Model):
    mesa_nro = models.IntegerField
    mesa_cap = models.IntegerField
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

class Plato(models.Model):
    plato_pre = models.FloatField()
    plato_nom = models.CharField(max_length=50)
    plato_img = models.ImageField(upload_to="plato_fotos")

class Category(models.Model):
    categoria_nom = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)