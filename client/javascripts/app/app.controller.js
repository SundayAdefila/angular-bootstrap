/*
 * We will wrap our code in a Immediately-Invoked Function Express or (IIFE) for short
 * This will execute the code immediately after it is created
 */
(function(){
  "use strict";
  
  /*
   * The Angular.module is a global place for creating, registering and retrieving
   * Angular core or 3rd party modules
   * The Angular.controller is where all the logic of the app is kept. The declared
   * variable vm stands for view mememory, we assign the this keyword to the variable
   */
  
  angular
    .module( "myApp")
    .controller( "AppController", ['$scope', function($scope){
      var vm = this;

      $scope.app_title = "Example Title";
    }]);
        
})();