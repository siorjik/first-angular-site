app.directive("mobileMenu", function() {
	return {
		restrict: "A",
		transclude: true,
		template: "<div ng-transclude></div><ul><li><a ui-sref-active='active' ui-sref='home' href=''>Main</a></li>"+
			"<li><a ui-sref-active='active' ui-sref='heroes' href=''>Heroes</a></li>"+
			"<li><a ui-sref-active='active' ui-sref='warriors' href=''>Warriors</a></li>"+
			"<li><a ui-sref-active='active' ui-sref='chat' href=''>Chat</a></li>"+
			"<li><a ui-sref-active='active' ui-sref='guest-book' href=''>Guest book</a></li>"+
			"<li><a ui-sref-active='active' ui-sref='registry' href=''>Registry</a></li>"+
			"<li><a href='#''>Personal area</a></li></ul>",
		link: function(scope, elem, attrs) {
			elem.on("click", function() {
				$(this).children("ul").slideToggle();
			});
		}
	}
});