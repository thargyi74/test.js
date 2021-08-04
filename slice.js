//returns a shallow copy of a portion of an array into a new array
//(Start index, numberCount)(start,end)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = numbers.slice(2, 6);
const numbers4 = numbers.slice();
const numbers3 = numbers.slice(-4);
console.log(numbers);
console.log(numbers2);
console.log(numbers4);
console.log(numbers3);

const participants = ["Florin", "Ivan", "Liam", "Jai", "Patrick"];
const winner = participants.slice(0, 3);
console.log(winner);

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
