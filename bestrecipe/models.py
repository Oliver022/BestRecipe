from django.db import models
from jsonfield import JSONField

class Recipe(models.Model):
    title = models.CharField(max_length=80)
    summary = models.TextField()
    cooktime = models.IntegerField()
    calorie = models.IntegerField()
    img = models.URLField()
    URL = models.URLField()
    structuredInstructions = JSONField()
    ingredients = JSONField()
    instruction = models.TextField()

class Ingredients(models.Model):
    name = JSONField()
    calorie = models.IntegerField()

class Quantifier(models.Model):
    name = models.CharField(max_length=20)

