from django.shortcuts import render_to_response
from django.template import RequestContext, Context
from bestrecipe.models import Recipe
import redis
import re
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

def index(request):
    return render_to_response('index.html')

def results(request):
    r = redis.StrictRedis(host='localhost', port=6379, db=0)
    ingredients= request.GET.getlist('ingredients', '')
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
        
    paginator = Paginator(results, 9)
    page = request.GET.get('page')
    try:
        group = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        group = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        group = paginator.page(paginator.num_pages)

    return render_to_response('results.html',{'results':group})

def recipe(request):
    index = request.GET.get('index', '')
    recipe = Recipe.objects.get(id=index)
    cooktime=recipe.cooktime
    if cooktime > 59:
        recipe.cooktime /= 60
        timeUnit='hrs'
    elif cooktime > 3599:
        recipe.cooktime /= 3600
        timeUnit='days'
    else:
        timeUnit='mins'

    pdv={"sodium":2400,"total_fat":65,"saturated_fat":20,"cholesterol":300,"total_carbohydrate":300,"dietary_fiber":25,"sugars":1,"protein":1,"calories":1,"calories_from_fat":1}
    recipe.nutrition={item:int(recipe.nutrition[item]) for item in recipe.nutrition}
    percent ={item:int(float(recipe.nutrition[item])/float(pdv[item])*100) for item in recipe.nutrition}
    #matches = re.search(r'\.(\w+\.com)',  recipe.URL)
    temp = re.findall("http://w*\.*([^/]*\.\w+)(/|$)",recipe.URL,re.I)
    if temp:
        domain=temp[0][0]
    else:
        domain="None"
    #domain = matches.group(1);

    return render_to_response('recipe.html',{'recipe':recipe,'timeunit':timeUnit,'percent':percent,'domain':domain})



