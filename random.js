function randomMath(min, max) {
  return Math.floor( Math.random() * (max - min + 1) + min) ;
}

//pass the minumum and maximum limits as parameters of the function

console.log(randomMath(10,15));
