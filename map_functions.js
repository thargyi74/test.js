const arr = [5, 1, 3, 2, 6];

// Double - [10,2,6,4,12]

// Triple - [15, 3, 9, 6, 18]

// Binary - ["101", "1", "11", "10", "110"]

//**** [].map(tranformation Logic as a call back functions) ****

function double(num) {
  return num * 2;
}

function triple(num) {
  return num * 3;
}
const binary = arr.map((num) => num.toString(2));

const output = arr.map(double);

console.log(output);
console.log(arr.map(triple));
console.log(binary);
