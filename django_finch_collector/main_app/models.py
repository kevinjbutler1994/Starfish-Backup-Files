from django.db import models
from datetime import date
from django.contrib.auth.models import User
# Create your models here.

# Add the Toy model
class Toy(models.Model):
  name = models.CharField(max_length=50)
  color = models.CharField(max_length=20)

  def __str__(self):
    return self.name

class Finch(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    age=models.IntegerField()
     # Add the M:M relationship
    toys = models.ManyToManyField(Toy)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
     return self.name

def fed_for_today(self):
  return self.feeding_set.filter(date=date.today()).count() >= len(MEALS)

# Add new Feeding model below Finch model

MEALS = (
    ('B', 'Breakfast'),
    ('L', 'Lunch'),
    ('D', 'Dinner')
)
class Feeding(models.Model):
  date = models.DateField()
  meal = models.CharField(
    max_length=1,
	 choices=MEALS,
	 default=MEALS[0][0]
  )
  # Create a finch_id FK
  finch = models.ForeignKey(Finch, on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.get_meal_display()} on {self.date}"
  



  # change the default sort
  class Meta:
    ordering = ['-date']
...
age = models.IntegerField()

  # new code below



