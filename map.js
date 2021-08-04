const numbers = [1, 2, 3, 4, 5];
const numberDouble = numbers.map(double);

function double(value, index, arr) {
  return value * 2;
}

console.log(numbers); // map က transformed ပြုပြင်ပြီး တခုခုလုပ်ပြီးတဲ့ arry အသစ် ဖြင့် ပြန်လာတယ် ဒါကြောင့် variable ထဲ ပြန်သိမ်းရမယ်
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
const totalProductValue = products.map((item) => item.price * item.count);
console.log(totalProductValue);

const eachProductValue = products.map((item) => ({
  name: item.name,
  totalValue: item.price * item.count,
}));
console.log(eachProductValue);

const numberAsString = ["1", "2", "3", "4", "5", "6"];
const numbersAsNumber = numberAsString.map((item) => Number(item));
console.log(numbersAsNumber);
const stringToNumberWithNumberConstruter = numberAsString.map(Number);
console.log(stringToNumberWithNumberConstruter);
