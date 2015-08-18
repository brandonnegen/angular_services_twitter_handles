var app = angular.module('myApp', []);

app.controller('MyController', function($scope, AdjectiveService, NounService){
    $scope.adj = AdjectiveService.adj;
    $scope.noun = NounService.noun;
});

app.factory('AdjectiveService', function(){
   var adjArray = ['adj1', 'adj2', 'adj3', 'adj4', 'adj5', 'adj6', 'adj7', 'adj8', 'adj9', 'adj10'];
    function randomNumber(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }
    function getRandomAdj(array){
        var randomAdj = adjArray[randomNumber(0, adjArray.length - 1)];
        return randomAdj;
    }
    var adj = {adj: getRandomAdj(adjArray)};
    return adj;
});

app.factory('NounService', function(){
   var nounArray = ['noun1', 'noun2', 'noun3', 'noun4', 'noun5', 'noun6', 'noun7', 'noun8', 'noun9', 'noun10']
    function randomNumber(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }
    function getRandomNoun(array){
        var randomNoun = nounArray[randomNumber(0, nounArray.length - 1)];
        return randomNoun;
    }
    var noun = {noun: getRandomNoun(nounArray)};
    return noun;
});