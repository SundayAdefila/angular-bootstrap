/*
 * We will wrap our code in a Immediately-Invoked Function Express or (IIFE) for short
 * This will execute the code immediately after it is created
 */
(function(){

  "use strict";
    
  angular
	  .module( "myApp", ['ui.router'])
	  .config(function($stateProvider) {
      var homeState = {
        name: 'home',
        url: '',
        templateUrl: "client/defaults/home.html"
      }

      var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: "client/defaults/about.html"
      }

      var contactState = {
        name: 'contact',
        url: '/contact',
        templateUrl: "client/defaults/contact.html"
      }

      $stateProvider.state(homeState);
      $stateProvider.state(aboutState);
      $stateProvider.state(contactState);
      $stateProvider.state("otherwise", { url : ''})

    });
	        
})();
