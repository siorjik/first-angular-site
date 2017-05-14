var app = angular.module("app", ['ui.router', 'ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider.state("home", {
		url: "/",
		templateUrl: "/app/templates/main.html",
		controller: "townsListCtrl"
	}).state("registry", {
		url: "/registry",
		templateUrl: "/app/templates/registry.html",
		controller: "registryCtrl"
	}).state("calendar", {
		url: "/calendar",
		templateUrl: "/app/templates/calendar.html"
	}).state("tavern", {
		url: "/tavern",
		templateUrl: "/app/templates/tavern.html"
	}).state("chat", {
		url: "/chat",
		templateUrl: "/app/templates/chat.html"
	}).state("guest-book", {
		url: "/guest-book",
		templateUrl: "/app/templates/guest-book.html",
		controller: "guestMessagesCtrl"
	});
});