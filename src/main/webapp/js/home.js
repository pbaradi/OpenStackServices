var homeApp = angular.module('homeApp',[]);

homeApp.controller("homeAppController", function($scope,$http) {
	
	$scope.signIn = function(){
		window.location.href = "http://localhost:8880/ServiceApplication/html/Login.html";
	};
	
	$scope.signUp = function(){
		window.location.href = "http://localhost:8880/ServiceApplication/html/Register.html";

	};
	
});