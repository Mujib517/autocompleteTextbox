var dirModule=angular.module('dirModule',[]);

dirModule.directive('autocompleteTextbox',function(){
    return {
        restrict:'E',
        templateUrl:'/plunk/template.html',
        scope:{
            items:"="
        },
        link:function(scope,element,attr){
            var items=scope.items;
            scope.vals=scope.items;
            scope.showSelection=false;

            scope.$watch('text',function(newVal,oldVal){
                scope.vals=[];
                if(newVal!==undefined){
                    var filteredArr=[];
                    for(var i=0;i<items.length;i++){
                        if(items[i].toLowerCase().indexOf(scope.text)>-1){
                            filteredArr.push(items[i]);
                        }
                    }
                    if(filteredArr.length>0){
                        scope.vals=filteredArr;
                        scope.showSelection=true;
                    }
                    else{
                        scope.showSelection=false;
                    }
                }
            });

            scope.select=function(val){
                scope.text=val;
                scope.showSelection=false;
            };
        }
    }
}); angular.module('templates-main', ['../template.html']);

angular.module("../template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../template.html",
    "<style>\n" +
    "    .cursor-hand {\n" +
    "        cursor: hand;\n" +
    "        cursor: pointer;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"col-lg-2\">\n" +
    "    <input type=\"text\" ng-model=\"text\" class=\"form-control\"/>\n" +
    "    <div class=\"suggestions\" ng-show=\"showSelection\">\n" +
    "        <ul class=\"list-group\">\n" +
    "            <li class=\"cursor-hand list-group-item\" ng-repeat=\"val in vals\" ng-click=\"select(val)\">{{val}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
