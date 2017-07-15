app.controller("registryCtrl", function($scope, $http) {
	this.registry = function(user) {
		if($scope.regForm.$valid) {
			$http.post("/app/backend/registry.php", user).then(function(success) {
				$scope.userLogin = success.data;
				user.login = "";
				user.email = ""
				user.pass = "";
				$scope.regForm.login.$setPristine(true);
				$scope.regForm.email.$setPristine(true);
				$scope.regForm.pass.$setPristine(true);
			}, function(error) {
				console.log(error);
			});
		}
	}

	this.closeAlert = function() {
		$scope.userLogin = false;
	}
});