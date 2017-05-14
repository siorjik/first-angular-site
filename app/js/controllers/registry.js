app.controller("registryCtrl", function($scope, $http) {
	this.registry = function() {
		if($scope.regForm.$valid) {
			console.log($scope.regForm);
		}
	}
});