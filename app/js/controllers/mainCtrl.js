app.controller("mainCtrl", function($scope, $translate, $document) {
	this.langs = [{name: "en"}, {name: "ru"}];
	$scope.lang = this.langs[0];

	this.changeLang = function(lang) {
		$translate.use(lang);
	}

	this.goScrollTo = (town) => {
		let elId = angular.element(document.getElementById(town));
    $document.scrollToElement(elId, 50, 1000);
	}
});