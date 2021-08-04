//Predicate function ဆိုတာ parameter တခုလက်ခံတယ် return က True or False ဖြစ်တာကိုပြောတာပါ
const numbers = [1, 3, 6, 4, 5, 0, 2, 8, 9, 4, 3, 2, 6, 7, 8, 5, 9, 5, 4, 3];
const even = numbers.filter((value) => value % 2 == 0);
console.log(even);
const slectArrayNumber = numbers.filter(
  (value, index, array) => array.indexOf(value) === index
);
console.log(sortArrayNumber);

const people = [
  {
    name: "Florin",
    age: 26,
  },
  {
    name: "Even",
    age: 16,
  },
  {
    name: "Ivan",
    age: 18,
  },
  {
    name: "Jai",
    age: 15,
  },
];

const adults = people.filter((person) => person.age >= 18);
console.log(adults);
