//define functions here
function getIt() {
  $('p').on("click", function(click) {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(load) {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which === 103) {
      alert('g was pressed')
    }
  })
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()

});
