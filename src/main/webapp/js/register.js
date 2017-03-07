var studentRegister = angular.module('studentRegister', []);

//Consumes create Students web service
studentRegister.controller("registerController", function($scope, $http){
	$scope.register = function() {
		$http({
			method : 'POST',
			url : 'http://localhost:8880/ServiceApplication/rest/compute/register?userName='+$scope.userName+"&emailId="+$scope.email+"&password="+$scope.password
		}).success(function(data, status, headers, config){
			$scope.message = "Congratulations!!!! Registration Successful!!!";
			alert("Congratulations!!!! Registration Successful!!!");
			window.location.href = "http://localhost:8880/ServiceApplication/html/Login.html";
		})
		.error(function(data, status, headers, config){
			$scope.error=true;
			$scope.errorMessage = data.errorMessage;
		});
	}
})












