app.directive("bxSlider", function() {
	return {
		restrict: "A",
		transclude: false,
		template: "<ul class='bxslider'><li><img src='/app/img/castle.jpg' title='Castle'></li>"+
		"<li><img src='/app/img/rampart.jpg' title='Rampart'></li>"+
		"<li><img src='/app/img/fortress.jpg' title='Fortress'></li>"+
		"<li><img src='/app/img/citadel.jpg' title='Citadel'></li>"+
		"<li><img src='/app/img/conflux.jpg' title='Conflux'></li>"+
		"<li><img src='/app/img/necropolis.jpg' title='Necropolis'></li>"+
		"<li><img src='/app/img/dangeon.jpg' title='Dangeon'></li>"+
		"<li><img src='/app/img/tower.jpg' title='Tower'></li>"+
		"<li><img src='/app/img/pier.jpg' title='Pier'></li></ul>",
		link: function(scope, elem, attrs) {
			elem.children().bxSlider();
		}
	}
});