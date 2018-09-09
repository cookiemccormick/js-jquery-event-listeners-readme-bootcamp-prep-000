//define functions here
function getIt() {
  $('p').on("click", function(click) {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(load) {
    $('.tasty')
  })
}
$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
