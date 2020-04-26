function freezeObj() {
  "use strict";    // used to catch any common programming errors
  const MATH_CONSTANTS = {
    PI: 3.14
  }
  
  Object.freeze(MATH_CONSTANTS); // freeses objects of MATH_CONSTANTS for any further changes
  
 //executing try-fetch block for any possible errors
  try {
    MATH_CONSTANTS.PI = 10;
  } catch (g){
    console.log(g);
  }
  return MATH_CONSTANTS.PI;
}
const X = freezeObj();
console.log(X)
