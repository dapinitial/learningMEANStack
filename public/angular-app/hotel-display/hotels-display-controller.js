angular.module('meanhotel')
  .controller('HotelController', HotelController);

function HotelController($http, $routeParams) {
  var vm = this;
  vm.id = $routeParams.id;
  $http.get('/api/hotel' + id).then(function(response) {
    vm.hotel = response.data;
  });
}
