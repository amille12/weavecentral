var app = angular.module('weaveCentral', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
//
// For any unmatched url, redirect to /state1
$urlRouterProvider.otherwise("/");
//
// Now set up the states
$stateProvider
  // .state('index', {
  //   url: "/",
  //   templateUrl: "index.html"
  // })
  .state('admin', {
    url: "/admin",
    templateUrl: "./views/admin.html"
  })
  .state('directory', {
    url: "/directory",
    templateUrl: "./views/directory.html"
  })
  .state('helpdesk', {
    url: "/helpdesk",
    templateUrl: "./views/helpdesk.html"
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
  });
});
