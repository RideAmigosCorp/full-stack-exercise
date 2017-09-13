(function () {

  "use strict";

  /**
   * A challenge leaderboard
   */
  angular
    .module('rideAmigos.leaderboard', [])
    .config(routes)
    .component('leaderboard', {
      bindings:{
        challengeId: '<'
      },
      templateUrl: 'templates/leaderboard.html',
      controller: function(Challenge){

        var $ctrl = this;

        /**
         * review lifecycle hooks at angular.org
         */
        $ctrl.$onInit = function() {
          //be sure to check Challenge API in services.js
          //fetch challenge details from your server
          //$ctrl.challengeId = is bound through url param
          //make sure you import data running the script provided in package.json

          $ctrl.challenges = [];
          $ctrl.challengeName = null;
          $ctrl.total = null;
        };
      }
    })

  /**
   * module routes
   */
  function routes($stateProvider) {
    $stateProvider
      .state('leaderboard', {
        url: '/leaderboard/:challengeId',
        params: {
          //leaderboard should reflect passed id
          //how would make the challengeId optional?
          challengeId: {squash: true, value: null}
        },
        resolve: {
          challengeId: function($stateParams){
            return $stateParams.challengeId;
          }
        },
        component: 'leaderboard'
      })
  }
})();
