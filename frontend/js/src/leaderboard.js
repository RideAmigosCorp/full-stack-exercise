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
      controller: function(Challenge, $state){

        var $ctrl = this;

        /**
         * review lifecycle hooks at angular.org
         */
        $ctrl.$onInit = function() {
          //be sure to check Challenge API in services.js
          //fetch challenge details from your server
          //$ctrl.challengeId = is bound through url param
          //make sure you import data running the script provided in package.json

          $ctrl.selectedChallenge = $ctrl.challengeId;
          $ctrl.challengeName = null;
          $ctrl.total = null;

          Challenge.fetchAll().then(function (success) {
            $ctrl.challenges = success.data;
          });
        };

        /**
         * load the selected challenge
         */
        $ctrl.changeChallenge = function(){}
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
