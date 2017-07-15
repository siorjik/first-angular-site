app.controller("townUnitsCtrl", function(townsList, units, $scope, $uibModal, $window) {
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

	//массив всех юнитов
	this.onlyUnits = function() {
		var startLvl = [];
		var upLvl = [];
		var resArr = [];
		
		for(var key in units) {
			var unitStart = units[key].warUnitStart;
			for(var k in unitStart) {
				unitStart[k].town = units[key].town; 
				startLvl.push(unitStart[k]);
			}
			var unitUp = units[key].warUnitUp;
			for(var i in unitUp) {
				unitUp[i].town = units[key].town;
				upLvl.push(unitUp[i])
			}
		}
		resArr = startLvl.concat(upLvl);
		//console.log(resArr);
		return resArr;
	}
	//выбор по-умолчанию в сравнении
	$scope.unit_1 = this.onlyUnits()[0];
	$scope.unit_2 = this.onlyUnits()[0];

	this.modalComparison = function(size, unit_1, unit_2) {
		var modalInstance = $uibModal.open({
      templateUrl: '/app/templates/comparison-modal.html',
      controller: function($scope, $uibModalInstance) {
      	$scope.unit_1 = unit_1;
      	$scope.unit_2 = unit_2;

      	$scope.xs = "";
      	if($window.screen.width > 550) $scope.xs = true;
      	else $scope.xs = false;

      	angular.element($window).on("resize", function() {
      		if(this.screen.width > 550) $scope.$apply("xs = true");
      		else $scope.$apply("xs = false");
      	});
      	
      	$scope.ok = function() {
      		$uibModalInstance.close();
      	}
      },
      size: size,
    });
	}
});