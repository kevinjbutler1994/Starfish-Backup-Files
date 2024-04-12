from django.db import models

# Create your models here.


class Civ(models.Model):
    name = models.CharField(max_length=12)
   


class Unit(models.Model):
    name = models.CharField(max_length=10)
    civ = models.ForeignKey(
        Civ,
        on_delete=models.CASCADE,
        related_name='units'
    )
