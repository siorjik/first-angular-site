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
				if(unitStart[k].damage) {
					var damageStart = unitStart[k].damage.indexOf("-");
					if(damageStart != -1) {
						var partStart_1 = unitStart[k].damage.substring(0, damageStart);
						var partStart_2 = unitStart[k].damage.substring(damageStart + 1);

						if(partStart_1 && partStart_2) unitStart[k].sumDamage = (+partStart_1 + +partStart_2) / 2;
					}
					else unitStart[k].sumDamage = +unitStart[k].damage;
				}
				if(unitStart[k].price) {
					var priceStart = unitStart[k].price.toString().indexOf("and");
					if(priceStart != -1) {
						var goldStart = unitStart[k].price.substring(0, priceStart - 1);
						var resursStart = unitStart[k].price.substr(priceStart + 4, 1);

						unitStart[k].priceResult = +goldStart + +resursStart;
					}
					else unitStart[k].priceResult = unitStart[k].price;
				}
				unitStart[k].town = units[key].town; 
				startLvl.push(unitStart[k]);
			}
			
			var unitUp = units[key].warUnitUp;
			for(var i in unitUp) {
				if(unitUp[i].damage) {
					var damageUp = unitUp[i].damage.indexOf("-");
					if(damageUp != -1) {
						var partUp_1 = unitUp[i].damage.substring(0, damageUp);
						var partUp_2 = unitUp[i].damage.substring(damageUp + 1);

						if(partUp_1 && partUp_2) unitUp[i].sumDamage = (+partUp_1 + +partUp_2) / 2;
					}
					else unitUp[i].sumDamage = +unitUp[i].damage;
				}
				if(unitUp[i].price) {
					var priceUp = unitUp[i].price.toString().indexOf("and");
					if(priceUp != -1) {
						var goldUp = unitUp[i].price.substring(0, priceUp - 1);
						var resursUp = unitUp[i].price.substr(priceUp + 4, 1);

						unitUp[i].priceResult = +goldUp + +resursUp;
					}
					else unitUp[i].priceResult = unitUp[i].price;
				}
				unitUp[i].town = units[key].town;
				upLvl.push(unitUp[i])
			}
		}
		
		resArr = startLvl.concat(upLvl);
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