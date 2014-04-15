from django.shortcuts import render_to_response
from django.template import RequestContext, Context
import redis

def index(request):
    return render_to_response('index.html')

def results(request):
    return render_to_response('results.html')

def recipe(request):
    r = redis.StrictRedis(host='localhost', port=6379, db=0)
    title = r.get('foo')
    content = Context({"title": title, "img":"/static/img/list-01.jpg","summary":"185 grams Butter; 12 tablespoons</br> 1/2 Cup Golden Syrup</br> 1/2 Cup Water</br>1/2 Cup Brown sugar; Firmly packed</br>1 Cup Grated carrot; About 2 carrots</br>1 teaspoon Bicarbonate of soda</br>11/2 Cups Plain flour; Sifted</br>3/4 Cup SR flour; Sifted</br>1 tablespoon Ground ginger</br>Original recipe makes 12 Servings"})

    return render_to_response('recipe.html',content)