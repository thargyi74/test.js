const arr = [5, 1, 3, 2, 6];

// Sum or Max

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));

const sum = arr.reduce(function (accumulatedValue, currentValue) {
  return (accumulatedValue = accumulatedValue + currentValue);
}, 0);
console.log(sum);

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));

const max = arr.reduce(function (accumulatedValue, currentValue) {
  if (currentValue > accumulatedValue) {
    return currentValue;
  }
  return accumulatedValue;
}, 0);

console.log(max);
