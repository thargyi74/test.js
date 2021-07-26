const arr = [5, 1, 3, 2, 6];

// Filters the array Odd by Logic function
// Filters the array Even by One line arrow function

function odd(num) {
  return num % 2 !== 0;
}
const oddArr = arr.filter(odd);
console.log(oddArr);

const evenArr = arr.filter((num) => num % 2 === 0);
console.log(evenArr);
