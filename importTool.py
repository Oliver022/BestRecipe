import pickle
import redis
from bestrecipe.models import Recipe

def add2DB(self,fileName):
    with open(fileName,"rb") as infile:
        cookbook=pickle.load(infile)

    for i in cookbook:
        dict={}
        for key, value in i.items():
            dict[key] = value
        p = Recipe(title=dict['title'],summary=dict['summary'],cooktime=dict['cooktime'],img=dict['img'],URL=dict['url'],nutrition=dict['nutrient'],structIngredients=dict['structIngs'],ingredients=dict['ingredient'],instruction=dict['instruction'],description=dict['description'])
        p.save()

def add2Redis(self):
    r = redis.StrictRedis(host='localhost', port=6379, db=0)
    for i in Recipe.objects.all():
        ingres=i.structIngredients
        for ingName,trival in ingres.items():
            r.lpush(ingName,i.id)

def clearRedis(self):
    r = redis.StrictRedis(host='localhost', port=6379, db=0)
    for key in r.keys():
        r.delete(key)

def showRedis(self):
    r = redis.StrictRedis(host='localhost', port=6379, db=0)
    for key in r.keys():
        r.lrange(key,0,-1)
