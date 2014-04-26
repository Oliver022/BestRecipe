import redis
from bestrecipe.models import Recipe
r = redis.StrictRedis(host='localhost', port=6379, db=0)
jsonList = []
for key in r.keys():
    jsonList.append(key)

