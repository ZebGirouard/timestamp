'use strict';

(function() {
    var app = angular.module('clementineApp', ['ngResource', 'ngRoute']);
        app.controller('timestampCTRL', ['$scope', '$resource', '$route', '$routeParams', '$location', function ($scope, $resource, $route, $routeParams, $location) {
            //var Surveys = $resource('/api/{id}/surveys');
            //var SurveyRemove = $resource('/api/{id}/surveyRemove');
            $scope.result = {};
            $scope.choice = {};
            var allPath = $location.absUrl().split("/");
            //$scope.surveyPath = allPath[allPath.length - 1];
            //$scope.surveyToShow = decodeURIComponent($scope.surveyPath);
            //$scope.userToShow = allPath[allPath.length - 3];
            console.log(allPath);
            //var SurveyVote = $resource('/'+$scope.userToShow+'/survey/'+$scope.surveyPath);
            
            
            /*$scope.submitPoll = function () {
                var newSurvey = $scope.survey;
                console.log(newSurvey);
                Surveys.save(newSurvey, function () {
                    $scope.getSurveys();
                });
                $scope.newSurveyShow = false;
                $scope.surveyNamePath = encodeURIComponent($scope.survey.name);
                var links = document.querySelector('#surveyLink') || null;
                if (links !== null) {
                    links.setAttribute("href", links.href.replace('pollNameHere',$scope.surveyNamePath));
                }
                $scope.viewLink();
            };*/
            
        }]);
})();