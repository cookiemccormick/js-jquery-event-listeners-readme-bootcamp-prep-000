//define functions here
function getIt() {
  $('p').on("click", function(click) {
    alert('Hey!')
  })
}

function frameIt() {
  $('tasty').on('load', function(load) {
  })
}
$(document).resady(function(){

// call functions here
getIt()
frameIt()
});
