var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}


var funkyFunction = function a() {
  return function b() {
    return 'FUNKY!'
  }
}
var theFunk = "FUNKY!"

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
