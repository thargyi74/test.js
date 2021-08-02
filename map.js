const numbers = [1, 2, 3, 4, 5];
const numberDouble = numbers.map(double);

function double(value, index, arr) {
  return value * 2;
}

console.log(numbers); // map က arry အသစ် ဖြင့် ပြန်လာတယ် ဒါကြောင့် variable ထဲ ပြန်သိမ်းရမယ်
console.log(numberDouble);

const numberMultiplyWithIndex = numbers.map((value, index) => value * index);
console.log(numberMultiplyWithIndex);

const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 800,
    count: 8,
  },
  {
    name: "phone",
    price: 400,
    count: 80,
  },
];

