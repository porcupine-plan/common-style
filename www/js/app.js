'use strict';

angular.module('styleGuideApp.controllers', []);
angular.module('styleGuideApp.directives', []);

angular.module('styleGuideApp', [
  'ngRoute',
  'ngSanitize',
  'hljs',
  'styleGuideApp.controllers',
  'styleGuideApp.directives',
  'commonHeader',
  'risevision.widget.common.alignment',
  'risevision.widget.common.color-picker',
  'risevision.widget.common.financial',
  'risevision.widget.common.tooltip',
  'risevision.widget.common.font-setting',
  'risevision.widget.common.scroll-setting',
  'risevision.widget.common.column-setting',
  'risevision.widget.common.table-setting'
])
  .config(function(hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      // replace tab with 2 spaces
      tabReplace: '  '
    });
  })
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'ReadeMeCtrl',
          templateUrl: 'partials/read-me.html'
        })
        .when('/commonheader', {
          controller: 'CommonHeaderCtrl',
          templateUrl: 'partials/common-header.html'
        })
        .when('/componentdemo', {
          templateUrl: 'partials/component-demo.html'
        })
        .when('/components', {
          controller: 'ComponentsCtrl',
          templateUrl: 'partials/components.html'
        })
        .when('/components/:id', {
          controller: 'ComponentsCtrl',
          templateUrl: 'partials/components.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);
