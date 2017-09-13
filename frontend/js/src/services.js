(function () {

  "use strict";

  angular
    .module('rideAmigos.services', [])
    .service('Challenge', Challenge)

  /**
   * Simple http wrapper, build this to get data from network
   * @param $http
   * @returns {Challenge}
   * @constructor
   */
  function Challenge($http) {

    var instance = this;

    //you will probably need to adjust this
    instance.apiUrl = '/api/challenges';

    /**
     * Fetch challenge details
     * @param challengeId
     */
    instance.fetch = function(challengeId){};

    /**
     * Get all challenges
     */
    instance.fetchAll = function(){};

    /**
     * Get all user stats for challenge
     */
    instance.fetchStats = function(){};

    /**
     * Lookup stats for one user
     */
    instance.lookupUser = function(){};

    return instance;
  }

})();