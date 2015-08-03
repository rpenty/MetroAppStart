angular.module("app", ["ui.router", "uiGmapgoogle-maps"])

    .config(function config($stateProvider) {
        $stateProvider.state("index", {
            url: "",
            controller: "FirstCtrl as first",
            templateUrl: "templates/first.html"
        })
        $stateProvider.state("second", {
            url: "/second",
            controller: "SecondCtrl as second",
            templateUrl: "templates/second.html"
        })
    })

    .service("greeting", function Greeting() {
        var greeting = this;
    
        greeting.message = "Username";
    })

    .controller("FirstCtrl", function FirstCtrl(greeting) {
        var first = this;

        first.greeting = greeting;
    })

    .controller("SecondCtrl", function SecondCtrl($scope, greeting) {
        var second = this;
    
        second.greeting = greeting;
    
        $scope.map = {
            center: { 
                latitude: 40.730, 
                longitude: -73.994 
            },
            zoom: 16
        }
        
        /*$scope.marker = {
            coords: {
                latitude: 40.730, 
                longitude: -73.994 
            }
        }*/
    })