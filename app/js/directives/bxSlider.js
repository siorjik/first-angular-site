app.directive("bxSlider", function() {
	return {
		restrict: "A",
		transclude: false,
		controller: "mainCtrl",
		template: "<ul class='bxslider' style='cursor: pointer;'><li><img src='/app/img/castle.jpg' title='Castle' ng-click='mainCtrl.goScrollTo("+'"castle"'+")'></li>"+
		"<li><img src='/app/img/rampart.jpg' title='Rampart' ng-click='mainCtrl.goScrollTo("+'"rampart"'+")'></li>"+
		"<li><img src='/app/img/fortress.jpg' title='Fortress'></li>"+
		"<li><img src='/app/img/citadel.jpg' title='Citadel'></li>"+
		"<li><img src='/app/img/conflux.jpg' title='Conflux'></li>"+
		"<li><img src='/app/img/necropolis.jpg' title='Necropolis'></li>"+
		"<li><img src='/app/img/dangeon.jpg' title='Dangeon'></li>"+
		"<li><img src='/app/img/tower.jpg' title='Tower' ng-click='mainCtrl.goScrollTo("+'"tower"'+")'></li>"+
		"<li><img src='/app/img/pier.jpg' title='Pier'></li></ul>",
		link: function(scope, elem, attrs) {
			elem.children().bxSlider();
		}
	}
});