from django.shortcuts import render_to_response
from django.template import RequestContext, Context
from bestrecipe.models import Recipe
import redis

def index(request):
    return render_to_response('index.html')

def results(request):
    r = redis.StrictRedis(host='localhost', port=6379, db=0)
    ingredients= request.GET.getlist('ingredients[]', '')

    conj=set()
    results=[]
    for i in ingredients:
        if conj==set():
            conj = set(r.lrange(i,0,-1))
        else:
            conj=conj&set(r.lrange(i,0,-1))
    for index in conj:
        result = Recipe.objects.get(id=index)
        results.append(result)

    return render_to_response('results.html',{'results':results,'tests':ingredients})

def recipe(request):
    return render_to_response('recipe.html',content)

def test(request):
    r = redis.StrictRedis(host='localhost', port=6379, db=0)
    ingredients=['champagne','sparkling wine']
    conj=set()
    results=[]
    for i in ingredients:
        if conj==set():
            conj = set(r.lrange(i,0,-1))
        else:
            conj=conj&set(r.lrange(i,0,-1))
    for index in conj:
        result = Recipe.objects.get(id=index)
        results.append(result)

    return render_to_response('test.html',{'results':results})

