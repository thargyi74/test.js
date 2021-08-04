const numbers = [1, 3, 6, 7, 8, 5, 4, 32, 4, 5, 3];
// reduce မှာ ပထမ parameter က callback function ဒုတိယ parameter က အစတန်ဖိုး initial value
// callback function မှာ ပါရာမီတာ ၃ခုရှိတယ် accumulator, value, index, array

const total = numbers.reduce(sum, 0);
function sum(accumulator, value, index, array) {
  return accumulator + value;
}
console.log(total);

const maxNumberInArray = numbers.reduce(callback, -Infinity);
function callback(accumulator, value) {
  if (accumulator > value) {
    return accumulator;
  } else {
    return value;
  }
}
console.log(maxNumberInArray);
const maxNum = numbers.reduce(
  (accumulator, value) => (accumulator > value ? accumulator : value),
  0
);
console.log(maxNum);

const store = [
  {
    product: "laptop",
    value: 1000,
    count: 3,
  },
  {
    product: "desktop",
    value: 800,
    count: 7,
  },
  {
    product: "phone",
    value: 1200,
    count: 9,
  },
];
const totalValueInStore = store.reduce(
  (accumulator, item) => accumulator + item.value * item.count,
  0
);
console.log(totalValueInStore);
