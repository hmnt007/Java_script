const realNum = [2, 3.14, 77, -7.7, 22]

const squareList = (arr) => {
// filtering and mapping positive integers to their squares
  const squaredInt = arr.filter(num => Number.isInteger(num) && num >= 0).map(x => x*x);
  return squaredInt;
}

const squaredInt = squareList(realNum);
console.log(squaredInt)
