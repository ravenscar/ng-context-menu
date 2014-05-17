/**
 * Example application for ng-autocomplete (https://github.com/ianwalter/ng-autocomplete)
 *
 * @author Ian Kennington Walter (http://ianvonwalter.com)
 */
requirejs.config({
  baseUrl: '.',
  paths: {
    'angular': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.min',
      'public/lib/angular/angular'
    ],
    'angular-route': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular-route.min',
      'public/lib/angular-route/angular-route.min'
    ],
    'ng-context-menu': [
      'dist/ng-context-menu'
    ]
  },
  shim: {
    'angular' : { 'exports' : 'angular' },
    'angular-route': { deps:['angular'] },
    'ng-context-menu': { deps:['angular'] }
  }
});

require(['angular', 'angular-route', 'ng-context-menu'], function(angular) {
  "use strict";

  var app = angular.module('menu-demo', ['ngRoute', 'ng-context-menu'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', { controller: 'HomeController', templateUrl: 'public/template/home.html', label: 'Home' })
        .otherwise({ redirectTo: '/' });
    }]);

  app.controller('HomeController', [
    '$scope',
    function($scope) {
      $scope.message  = 'Right click triggered';

      $scope.onRightClick = function(msg) {
        console.log(msg);
      }
    }
  ]);

  angular.bootstrap(document , ['menu-demo']);
});
