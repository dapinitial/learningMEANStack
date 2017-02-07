
function HotelsController() {
  var vm = this;
  vm.title = "MEAN Hotel App";
  $http.get('/api/hotels')
    .then(function(response) {
      console.log(response);
    });
}
