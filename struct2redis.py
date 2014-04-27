import redis
from bestrecipe.models import Recipe
r = redis.StrictRedis(host='localhost', port=6379, db=0)
for i in Recipe.objects.all():
    ingres=i.structIngredients
    for ingName,trival in ingres.items():
        r.lpush(ingName,i.id)

for i in Recipe.objects.all():
    ingres=i.structIngredients
    for ingName,trival in ingres.items():
        if not r.exists(ingName):
            newSet = set()
            newSet.add(i.id)
            r.set(ingName,newSet)
        else:
            pipe = r.pipeline()
            pipe.get(ingName).sadd(ingName,i.id)
            r.delete(ingName)
            r.set(ingName,newSet)





for key in r.keys():
    r.delete(key)

for key in r.keys():
    r.lrange(key,0,-1)

