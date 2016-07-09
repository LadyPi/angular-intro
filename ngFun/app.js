var app = angular.module("ngFun", []);

// this needs to be refactored for injection
// app.controller("PokemonCtrl", function($scope) {
	// you want to add scope to your object 
	// so that'pokemon' is shared by app.js and view
  
app.controller("PokemonCtrl", PokemonCtrl);
PokemonCtrl.$inject = ['$scope', 'reverseFilter'];
function PokemonCtrl($scope, reverseFilter) {

  // $scope.trainer = "Ash";

  // $scope.catchphrase = "gotta catch 'em all!";	

  $scope.pokemon = [
  	{
  	  Ndex: 25,
  	  name: 'Pikachu',
  	  type: 'Electric'
  	},
  	{  Ndex: 10,
  	   name: 'Caterpie',
  	   type: 'Bug' 
  	},
  	{
  	  Ndex: 39,
  	  name: 'Jigglypuff',
  	  type: 'Fairy'
  	},
  	{
  	  Ndex: 94,
  	  name: 'Gengar',
  	  type: 'Ghost' 	
  	},
  	{
  	  Ndex: 143,
  	  name: 'Snorlax',
  	  type: 'Normal'
  	}
  ];
}

app.filter('reverse', function() {
  return function(input) {
    input = input || '';
    var out = input.split("").reverse().join("");
    // uppercase only first letter
    out = out.toLowerCase();
    out = out[0].toUpperCase() + out.slice(1);
    return out;
  };
});

// Note: filters require a function to be returned.