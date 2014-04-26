var labelNum = 0;
var labelFormat=new Array("btn-info","btn-warning","btn-success","btn-inverse","btn-danger");
function remove(id){
    var elemButton=document.getElementById(id);
    elemButton.parent.removeChild(elemButton);
    var elemHidden=document.getElementById("H"+id);
    elemHidden.parent.removeChild(elemHidden);
    $("#addIngre").val("");
}

$(document).ready(function() {
    //var ingredient_list= new Array();
    
    $("#addBtn").click(function(){
        if($("#addIngre").val()!=""){
            labelValue = $("#addIngre").val();
            $("#ingreList").append("     <button class=\"btn btn-small "+labelFormat[labelNum%5]+"\" id=\""+labelNum+"\" onclick=\"remove(this.id)\"><i class=\"icon-remove-circle icon-white\"></i>"+$("#addIngre").val()+"</button>");
            labelNum = labelNum+1;
            $("#addIngre").val("");
            $("#hidden").append("<input type=\"hidden\" name=\"ingredients\" value=\""+labelValue+"\" id=\"H"+labelNum+"\"/>")
        }
    });
// the basics
// ----------

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });

    cb(matches);
  };
};

var ingredients = ["raw honey", "zucchini", "honey", "stalk lemongrass", "red", "turmeric", "red potato", "gelatin", "sauce", "bacon", "quart", "strawberry jelly", "kohlrabi", "thyme", "onion powder", "apart", "stick", "chocolate chunk", "blue moon beer", "red pepper", "spinach", "syrup", "vegetable oil", "yellow onion", "tapioca starch", "rice vinegar", "pear", "whole milk", "grapefruit", "cayenne powder", "vanilla icing:", "blackberry jam", "jicama", "gouda", "canola oil", "goat cheese", "black plum", "sesame seed", "marinade", "egg", "all-purpose flour", "dijon mustard", "coffee", "chicken stock/broth", "kirshwasser", "cornmeal", "horseradish sauce", "oraange", "kimchi", "hand", "quail egg", "telera roll", "bean", "rigatoni pasta", "shallot", "grigio", "coconut oil", "milk chocolate chip", "all-spice", "bourbon", "leche", "chocolate", "chicken", "cinnamon", "parmesan cheese", "virgin olive oil", "reese", "anaheim chile", "fuyu", "olive oil", "romaine leaf", "grape tomato", "light corn syrup", "allow cooky", "oil", "kosher salt", "cranberry", "espresso", "meat", "celery stalk", "mixture", "almond butter", "semolina flour", "lemon", "almond meal", "green chile", "phyllo dough", "brown sugar", "celery", "pecan", "swedish pearl sugar", "spaghetti", "cinnamon-graham", "vanilla", "flour", "butter", "mustard cream", "thousand", "kidney bean", "coriander", "pork", "vinaigrette:", "sea scallop", "mango", "vanilla extract", "star anise", "chive", "light mexican beer", "chip", "french baguette", "biscuit", "chestnut flour", "tmd lavender liquor", "wheat berry", "ginger-miso", "yolk", "cherry juice", "french fry", "banana", "dill", "poppy seed", "blueberry jam", "barbecue sauce", "vanilla bean", "pumpkin", "venus clam", "gastrique:", "whole clove", "marshmallow", "annatto seed", "pretzel bread", "salmon", "chocolate chip", "chocolate sauce", "lotus root", "russet potato", "whole", "almond milk", "lemon juice", "blend", "corn syrup", "sesame oil", "ginger", "baking", "ricotta", "troublemaker", "bread", "riesling", "peppadew pepper", "ketchup", "wheat germ", "yucca root", "sweet rice flour", "gruyere", "caramel sauce", "jalapeno", "queso fresco", "jam", "shiso leaf", "basil leaf", "coffee extract", "sweet onion", "purple", "panko breadcrumb", "ponzu sauce", "broth", "red celery stalk", "pineapple", "vanilla greek yogurt", "gin", "whole egg", "cream", "tomato juice", "fontina cheese", "parker house roll", "continue", "boil egg", "turkey", "black", "worcestershire sauce", "marinara", "stalk", "refrigerate cooky", "champagne vinaigrette:", "gold", "rice", "yellowtail fillet", "bamboo skewer", "peanut oil", "kaiser roll", "raisin", "sweet pea", "adobo sauce", "butter lettuce", "corn tortilla", "champagne vinaigrette", "chick pea", "cake", "baby carrot", "flatbread", "tomato sauce", "sirloin", "cider", "cornstarch", "crabmeat", "pepperoncini", "sour cream", "sweet corn", "wine", "manchego", "cumin", "manila clam", "rum", "curry powder", "puff pastry", "green onion", "green", "hershey bar", "tequila", "wild rice", "red bell pepper", "cooky", "rom tomato", "water chestnut", "red wine", "iceberg", "cavatappi pasta", "all", "cheddar cheese", "mushroom", "white miso paste", "italian sausage", "sweet cream butter", "tahini", "lime juice", "shishito pepper", "sparkling wine", "chicken stock", "whole wheat flatbread", "almond", "germain", "baking soda", "cumin seed", "creme fraiche", "wonton wrapper", "test", "cake flour", "guacamole", "lamb leg", "cremini mushroom", "poblano chile", "asparagus", "ahi tuna steak", "ssamjang", "fusilli pasta", "juice", "bleu cheese", "hazelnut", "cocktail pick", "arborio rice", "salad oil", "minute tapioca", "baking powder", "soy sauce", "ice cube", "pine nut", "ball burrata cheese", "chicken breast", "pine", "black mussel", "rice flour", "light", "peanut butter", "quart vegetable stock", "walnut", "yellow beet", "yellow squash", "pork belly", "rosemary", "scallop", "orange", "cranberry sauce", "garbanzo bean", "pumpkin puree", "chili", "hot sauce", "steak", "green bell pepper", "sweet italian sausage", "ball", "melon", "domaine", "basil", "tarragon", "tomato", "yangnyum", "cardamom", "pomegranate seed", "white", "parmesan", "sweet cherry", "brown beech mushroom", "virgin olive", "powder sugar", "clove garlic", "flavored", "vanilla wafer crumb", "white cheddar", "salt", "whole wheat baguette", "cherry pepper", "blackberry flavored:", "peach", "apple cider vinegar", "water", "iceberg lettuce", "chocolate wafer", "pita", "rhubarb raspberry", "coconut milk", "popcorn", "black pepper", "fennel", "parker house bread", "milk chocolate", "coconut flake", "simple", "white shrimp", "oat", "chicken broth", "thai green curry paste", "cherry", "sweetbread", "sweet corn kernel", "yellow cornmeal", "green bean", "shrimp", "dust", "gruyere cheese", "provolone cheese", "pepperoni", "lettuce", "black missing fig", "butternut", "radicchio", "oat flour", "havarti", "yellow corn", "juniper berry", "egg roll wrapper", "dry", "cheddar popcorn", "parsley", "light mayonnaise", "meal", "poblano pepper", "raspberry", "color", "mozzarella cheese", "port wine", "pizza", "broccolini", "chia seed", "apricot ale", "leaf parsley", "king oyster mushroom", "ice", "rice krispies cereal", "paprika", "cinnamon stick", "sage", "whole wheat flour", "lamb", "agave nectar", "fig", "chili sauce", "picked pepper", "fava bean", "perilla leaf", "luster", "kabocha", "thai chile", "red chili", "graham", "relish", "garlic clove", "chipotle", "potato chip", "sprout", "avocado", "champagne vinegar", "chile", "ciliegine", "saffron", "mezzi rigatoni", "light brown sugar", "ancho", "cheddar", "banana leaf", "pink quin", "rice cake ovalettes", "arepa", "porridge:", "gold rum", "corn kernel", "green olive", "black peppercorn", "manchego cheese", "pork shoulder", "mint extract", "buttermilk", "apple sauce", "chipotle pepper", "pasta water", "chili powder", "oregano", "yellow", "cocoa powder", "orange cream cheese", "creme brulee custard", "citrus-vanilla", "beet", "cilantro leaf", "worchestershire sauce", "molasses", "mascarpone cheese", "mayonnaise", "comte cheese", "balsamic vinaigrette", "amaretti cooky", "cayenne pepper", "banana pepper", "ready-made", "mirin", "yellow mustard seed", "cucumber", "champagne", "cheese", "gherkin", "parpardelle pasta", "tomato puree", "garlic", "blackberry", "sweet bourbon", "applesauce", "virgin coconut oil", "brussels sprout", "brown sugar buttermilk", "leaf", "dijon", "radish", "jumbo pasta shell", "snap cooky", "carrot", "wine vinegar", "baguettes:", "balsamic vinegar", "unsalted butter", "gochujang", "pancetta", "quickly roll", "oyster mushroom", "vegetable", "mascarpone", "seed", "short-ribs", "watermelon rind", "purple potato", "fuyu persimmon", "red amaranth", "puree", "garlic powder", "cream butter", "simple syrup", "orange peel", "leek", "ricotta cheese", "tomatillo", "tiger shrimp", "mustard", "mozzarella", "sweet potato", "pasta", "chickpea", "acorn squash", "quart vegetable oil", "white wine", "tango apple", "coconut", "nori", "farro", "chile powder", "powder", "sausage", "flax seed", "milk", "uni", "strawberry", "greek yogurt", "persimmon", "parsnip", "baguette", "simple butter", "guajillo chile", "beer", "yellow-miso", "kale", "shitake mushroom", "pie", "dry mustard", "rib", "soy bean", "crema", "chestnut", "coriander seed", "sweet", "kiwi-strawberry:", "flaxseed meal", "yuzu extract", "watermelon", "lime", "anise seed", "st. germain", "thread saffron", "yeast", "quinoa", "unsalted", "red onion", "balls:", "lavender", "filo", "corn", "cilantro", "purple sweet potato", "cayenne", "all purpose flour", "bell pepper", "peanut butter chip", "spanish chorizo", "pickle", "light sour cream", "black sesame seed", "turnip", "london broil", "chai", "mint", "jack cheese", "pork sausage", "dry ginger", "bowl", "pizza dough:", "sweet corn succotash:", "stock", "ham", "bamboo shoot", "orecchiette pasta", "apple", "acorn", "shiitake mushroom", "turkey breast", "dulce", "baby bok choy", "white vinegar", "poblano", "white pepper", "bay leaf", "mexican oregano", "mustard seed", "rhubarb", "melt", "seared", "sauce:", "flour tortilla", "salted butter", "paste", "cake crumbles", "marjoram", "bryan flannery prime", "cut cooky", "mexican chocolate", "cream cheese", "red wine vinegar", "beef", "sea urchin", "potato", "kiwi", "maple syrup", "vinegar", "black coffee", "nutella", "strip steak", "cottage cheese", "tangelo", "whole wheat burger bun", "french", "tomato paste", "bleu", "prosciutto", "hoisin sauce", "bacon:", "oyster sauce", "olive", "red beet", "oyster", "mint leaf", "coleslaw", "sea salt", "green apple", "tangerine", "cauliflower floret", "sheet", "rice wine vinegar", "red chili sauce", "cherry compote:", "red grapefruit", "chile de arbol", "oaxaca cheese", "peanut", "marinara sauce", "pepper", "asiago cheese", "brandy", "ricotta salata", "vanilla ice cream", "buckwheat noodle", "sriracha", "icing:", "breadcrumb", "sugar", "baby eggplant", "balsamic vinaigrette:", "blueberry", "orange marmalade", "parsnip mash:", "falafel:", "rhubarb stalk", "adobe", "raspberry puree", "grape", "clove", "serrano pepper", "onion", "salsa", "tofu", "orange juice", "black beet", "black bean", "turkey drumstick", "lemongrass", "pretzel stick", "crumb", "maple", "feta", "nutmeg", "graham cracker", "hamburger bun", "caper", "pistachio", "cherry tomato", "chocolate chip-coconut", "port", "vegetable stock", "red beet puree", "vodka"];

$('#addIngre').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'ingredients',
  displayKey: 'value',
  source: substringMatcher(ingredients)
    
});
});
