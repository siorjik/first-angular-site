app.directive("bxSlider", function() {
	return {
		restrict: "A",
		transclude: false,
		template: "<ul class='bxslider'><li><img src='/app/img/castle-slide.jpg' title='Castle'></li><li><img src='/app/img/rampart-slide.jpg' title='Rampart'></li><li><img src='/app/img/fortress-slide.jpg' title='Fortress'></li></ul>",
		link: function(scope, elem, attrs) {
			elem.children().bxSlider();
		}
	}
});