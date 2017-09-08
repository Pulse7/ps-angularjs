(function () {
    var app = angular.module("githubViewer");

    var MainController = function ($scope, $interval, $location) {
        
        var decrementCountdown = function () {
            $scope.countdown--;
            if ($scope.countdown < 1) {
                $scope.search();
            }
        }

        $scope.search = function () {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = undefined;
            }
            $location.path("/user/" + $scope.username);
        }
        $scope.username="angular";
        $scope.countdown = 5;
        var countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    }

    app.controller("MainController", MainController);
})()