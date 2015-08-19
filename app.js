var app = angular.module('myApp', []);

app.controller('MyController', function($scope, CompileService){
    $scope.twitter = CompileService;
});

app.factory('AdjectiveService', function(){
    var adjArray = ['hushed', 'lopsided', 'tangy', 'lowly', 'bloody', 'nonchalant', 'condemned', 'ratty', 'gaping', 'trashy', 'irritating', 'lewd', 'woozy', 'psychedelic', 'grouchy', 'glossy', 'clammy', 'teeny', 'dazzling'];
    return adjArray;
});

app.factory('NounService', function(){
    var nounArray = ['cherries', 'cattle', 'stitch', 'minute', 'sink', 'chicken', 'fang', 'growth', 'apparatus', 'blow', 'flesh', 'earth', 'rabbits', 'hot', 'taste', 'bottle', 'mice', 'poison', 'veil', 'crayon', 'tongue'];
    return nounArray;
});

app.factory('CompileService', function(NounService, AdjectiveService){
    var compiledArray = [];
    function randomNumber(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }
    for(var i = 0; i<=10; i++) {
        compiledArray.push(AdjectiveService[randomNumber(0, AdjectiveService.length - 1)] + "_" + NounService[randomNumber(0, NounService.length - 1)]);
    };
    return compiledArray;
    console.log(compiledArray);
});