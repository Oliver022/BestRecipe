var labelNum = 0;
var labelFormat=new Array("btn-info","btn-warning","btn-success","btn-inverse","btn-danger");
function remove(id){
    var element=document.getElementById(id);
    element.parent.removeChild(element);
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
            $("#hidden").append("<input type=\"hidden\" name=\"ingredients\" value=\""+labelValue+"\" />")
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

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

$('#addIngre').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  displayKey: 'value',
  source: substringMatcher(states)
});
});
