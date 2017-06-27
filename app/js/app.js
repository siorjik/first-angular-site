var app = angular.module("app", ['ui.router', 'ngSanitize', 'ngAnimate', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider.state("home", {
		url: "/",
		templateUrl: "/app/templates/main.html"
	}).state("heroes", {
		url: "/heroes",
		templateUrl: "/app/templates/heroes.html"
	}).state("warriors", {
		url: "/warriors",
		templateUrl: "/app/templates/warriors.html"
	})./*state("tavern", {
		url: "/tavern",
		templateUrl: "/app/templates/tavern.html"
	}).*/state("chat", {
		url: "/chat",
		templateUrl: "/app/templates/chat.html"
	}).state("guest-book", {
		url: "/guest-book",
		templateUrl: "/app/templates/guest-book.html"
	}).state("registry", {
		url: "/registry",
		templateUrl: "/app/templates/registry.html"
	});
});