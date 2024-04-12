from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Civ, Unit

# Register your models here.
admin.site.register(Civ)
admin.site.register(Unit)
