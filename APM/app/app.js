var app;
(function (app) {
    var main = angular.module("productManagement", ["ngRoute", "common.services", "productResourceMock"]);
    main.config(routeconfig);
    routeconfig.$inject = ["$routeProvider"];
    function routeconfig($routeProvider) {
        $routeProvider
            .when("/productList", {
            templateUrl: "/app/products/productListView.html",
            controller: "ProductListCtrl as vm"
        })
            .when("/productDetail/:productId", {
            templateUrl: "/app/products/productDetailView.html",
            controller: "ProductDetailCtrl as vm"
        })
            .otherwise({
            redirectTo: "/productList"
        });
    }
})(app || (app = {}));
