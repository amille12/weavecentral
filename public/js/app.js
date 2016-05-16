var app = angular.module('weaveCentral', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
//
// For any unmatched url, redirect to /state1
$urlRouterProvider.otherwise("/");
//
// Now set up the states
$stateProvider
  .state('dashboard', {
    url: "",
    templateUrl: "./views/dashboard.html"
  })
  .state('admin', {
    url: "/admin",
    templateUrl: "./views/admin.html"
  })
  .state('directory', {
    url: "/directory",
    templateUrl: "./views/directory.html",
    controller: "directoryCtrl"
  })
  .state('helpdesk', {
    url: "/helpdesk",
    templateUrl: "./views/helpdesk.html",
    controller: "helpDeskCtrl"
  })
  .state('supportportal', {
    url: "/supportportal",
    templateUrl: "./views/supportportal.html"
  })
  .state('weaveinsights', {
    url: "/weaveinsights",
    templateUrl: "./views/weaveinsights.html"
  })
  .state('hrportal', {
    url: "/hrportal",
    templateUrl: "./views/hrportal.html"
  })
  .state('messagethefounders', {
    url: "/messagethefounders",
    templateUrl: "./views/messagethefounders.html"
  });
});
