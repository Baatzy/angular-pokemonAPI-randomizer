(function () {
  'use strict';

  angular.module('app', [])
    .component('app', {
      controller: controller,
      template: `
      <div class="container text-center">
      <h3>Generate a random Pokemon!</h3>
      <br>
      <button ng-click="$ctrl.pokeAPI()" type="submit" class="btn btn-primary">
        Generate
      </button>
      <br><br>
      <img ng-src={{$ctrl.pokeImage}} width="100">
      <br><br>
      <h4>{{$ctrl.pokeName.charAt(0).toUpperCase() + $ctrl.pokeName.slice(1)}}</h4>
      </div>
      `
    })

    controller.$inject = ['$http']
    function controller ($http) {
    	const vm = this

      vm.pokeAPI = function () {
        const random = Math.ceil(Math.random() * 722)
        const url =`http://pokeapi.co/api/v2/pokemon/${random}`
        vm.pokeImage = 'https://68.media.tumblr.com/tumblr_lvwmhdE0lN1qg0dcvo1_500.gif'
        vm.pokeName = ''

    		$http.get(url).then(function (response) {
          vm.pokemon = response.data
          
          vm.pokeImage = vm.pokemon.sprites['front_default']
          vm.pokeName = vm.pokemon.name
        })
      }
    }
})()
