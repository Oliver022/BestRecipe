import pickle
from bestrecipe.models import Recipe
with open("structindict.pickle","rb") as infile:
    cookbook=pickle.load(infile)

for i in cookbook:
    dict={}
    for key, value in i.items():
        dict[key] = value
    p = Recipe(title=dict['title'],summary=dict['summary'],cooktime=dict['cooktime'],img=dict['img'],URL='',calorie=1000,structuredInstructions=dict['structIngs'],ingredients=dict['ingredient'],instruction=dict['instruction'])
    p.save()
