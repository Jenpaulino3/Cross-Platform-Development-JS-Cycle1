<<<<<<< HEAD
angular.module("my-app", [])

.controller("mainCtrl", function($scope){
	$scope.numbers = {
		num1: "",
		num2: ""
	}

	$scope.add = function(){
		$scope.result = $scope.numbers.num1 + $scope.numbers.num2;
	}
	$scope.subtract = function(){

	}
	$scope.multiply = function(){

	}
	$scope.divide = function(){

	}
=======
angular.module("my-app", [])

.controller("mainCtrl", function($scope){
	$scope.numbers = {
		num1: "",
		num2: ""
	}

	$scope.add = function(){
		$scope.result = $scope.numbers.num1 + $scope.numbers.num2;
	}
	$scope.subtract = function(){

	}
	$scope.multiply = function(){

	}
	$scope.divide = function(){

	}
>>>>>>> ea7c34e52f9f1b3fcffbd6ca158d42d420b873a2
})