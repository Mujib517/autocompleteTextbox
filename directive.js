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
});