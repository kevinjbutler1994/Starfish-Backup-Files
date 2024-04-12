from django.db import models

# subway/models.py


class Post(models.Model):
  author = models.CharField(max_length=120)
  title = models.CharField(max_length=120)
  body = models.CharField(max_length=120)

  def __str__(self):
    return self.name

class Comment(models.Model):
  author = models.CharField(max_length=120)
  body = models.CharField(max_length=120)
  post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='posts')

  def __str__(self):
    return self.name




