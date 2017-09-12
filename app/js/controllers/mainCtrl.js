app.controller("mainCtrl", function($scope, $translate) {
	this.langs = [{name: "en"}, {name: "ru"}];
	$scope.lang = this.langs[0];

	this.changeLang = function(lang) {
		$translate.use(lang);
	}
});