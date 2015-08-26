angular.module('templates-main', ['../template.html']);

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
