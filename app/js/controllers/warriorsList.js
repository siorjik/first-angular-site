app.controller("townUnitsCtrl", function(townsList, units, $scope, $uibModal) {
	this.checkTown = townsList;
	this.units = units;

	this.modal = function(size, unitObj) {
		var modalInstance = $uibModal.open({
      templateUrl: '/app/templates/modal-unit.html',
      controller: function($scope, $uibModalInstance) {
      	$scope.unitObj = unitObj;
      	$scope.ok = function() {
      		$uibModalInstance.close();
      	}
      },
      size: size,
    });
	}
});