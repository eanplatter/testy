
'use strict';
/* global app:true */
var app = angular.module('ngnewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/',  {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
       .when('/register',  {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
       .when('/login',  {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
       .when('/posts/:postId',  {
        templateUrl: 'views/postview.html',
        controller: 'PostViewController'
      })
      .otherwise({
        redirectTo: '/'
      });
   });
  
app.constant('FIREBASE_URL', 'https://ngnews1337.firebaseio.com/')