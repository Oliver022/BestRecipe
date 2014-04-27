from django.db import models
from jsonfield import JSONField

class Recipe(models.Model):
    title = models.CharField(max_length=80)
    summary = JSONField()
    cooktime = models.IntegerField()
    nutrition = JSONField()
    img = models.URLField()
    URL = models.URLField()
    structIngredients = JSONField()
    ingredients = JSONField()
    instruction = JSONField()
    description = JSONField()

