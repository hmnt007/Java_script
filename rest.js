const sum = (function() {
  return function sum(...args) {   
    return args.reduce((a,b) => a+b, 0);
  };
}) ();
//const x = [1,2,3,4]
console.log(sum(1,2,3,4,5))
