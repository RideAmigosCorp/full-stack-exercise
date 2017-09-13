
var modules = [
  'ui.router',
  'rideAmigos.leaderboard',
  'rideAmigos.services',
  'rideAmigos.footer'
];

angular
  .module('rideAmigos', modules)
  .config(homeConfig);

function homeConfig($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      resolve: {}
    })

  $urlRouterProvider.otherwise("/home");
}

