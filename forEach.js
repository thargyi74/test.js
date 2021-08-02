const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach((item) => (sum += item));
console.log(sum);
/* function consoleItem(item, index, arr) {
  console.log("a[" + index + "] = " + index);
} */
const letters = ["a", "b", "c", "b", "c", "a", "d", "d", "d"];
const countLetters = {};

letters.forEach(
  (value) =>
    countLetters[value] ? countLetters[value]++ : (countLetters[value] = 1)
  /* if (countLetters[value]) {
    countLetters[value]++;
  } else {
    countLetters[value] = 1;
  } */
);
console.log(countLetters);
