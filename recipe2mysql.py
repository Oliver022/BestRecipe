import pickle
from bestrecipe.models import Recipe
with open("struct.listofdict.pickle","rb") as infile:
    cookbook=pickle.load(infile)

for i in cookbook:
    dict={}
    for key, value in i.items():
        dict[key] = value
    p = Recipe(title=dict['title'],summary=dict['summary'],cooktime=dict['cooktime'],img=dict['img'],URL=dict['url'],nutrition=dict['nutrient'],structIngredients=dict['structIngs'],ingredients=dict['ingredient'],instruction=dict['instruction'],description=dict['description'])
    p.save()
