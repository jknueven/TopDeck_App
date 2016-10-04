(function() {
'use strict';

	angular
	.module('topdeck', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	  	.state('home', {
	  			url: '/',
	  			views: {
      				'main': {
		        	templateUrl: '../views/home.html',
		        	controller: 'appController',
		        	controllerAs: 'home',
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		      		},
		  		},
	    	})
	  	.state('admin', {
	  		url: "/admin", 
	  		views: {
      				'main': {
		        	templateUrl: '../views/admin.html',
		        	controller: 'adminController',
		        	controllerAs: 'admin',
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		      		},
		  		},
	  		})
	});
})();