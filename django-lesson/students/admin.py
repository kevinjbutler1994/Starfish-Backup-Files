from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Cohort, Student

# Register your models here.
admin.site.register(Cohort)
admin.site.register(Student)
