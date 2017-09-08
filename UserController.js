// Code goes here

(function() {
    var app = angular.module("githubViewer");
  
    var UserController = function($scope, github, $routeParams) {
      var onRepos = function(data) {
        $scope.repos = data;
      }
      var onUserComplete = function(data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos);
      }

      $scope.username = $routeParams.username;
      $scope.repo_sortOrder = "-stargazers_count";
      github.getUser($scope.username).then(onUserComplete);
    }
  
  
  
    app.controller("UserController", UserController);
  })()