from django.db import models

class Books(models.Model):
    name = models.CharField(max_length=128)
    subject = models.CharField(max_length=5)
    on_delete=models.CASCADE

    