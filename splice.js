//changes the contents of an array by removing or replacing existing elements and/or adding new elements
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//splice(start, deleteCount, item1, item2, itemN)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const deleted = numbers.splice(2, 3);
console.log(numbers);
console.log(deleted);

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);
months.splice(4, 1, "May");
console.log(months);

//Remove 0 (zero) elements BEFORE index 2, and insert "drum"
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 0, "drum");
console.log(myFish);
console.log(removed);

//Remove 0 (zero) elements BEFORE index 2, and insert "drum" and "guitar"
let myFish01 = ["angel", "clown", "mandarin", "sturgeon"];
let removed01 = myFish01.splice(2, 0, "drum", "guitar");
console.log(myFish01);
console.log(removed01);

//Remove 1 element at index 3
let myFish02 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
let removed02 = myFish02.splice(3, 1);
console.log(myFish02);
console.log(removed02);

//Remove 1 element at index 2, and insert "trumpet"
let myFish03 = ["angel", "clown", "drum", "sturgeon"];
let removed03 = myFish03.splice(2, 1, "trumpet");
console.log(myFish03);
console.log(removed03);

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
let myFish04 = ["angel", "clown", "trumpet", "sturgeon"];
let removed04 = myFish04.splice(0, 2, "parrot", "anemone", "blue");
console.log(myFish04);
console.log(removed04);

//Remove 2 elements, starting from index 2
let myFish05 = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
let removed05 = myFish05.splice(2, 2);
console.log(myFish05);
console.log(removed05);

//Remove 1 element from index -2
let myFish06 = ["angel", "clown", "mandarin", "sturgeon"];
let removed06 = myFish06.splice(-2, 1);
console.log(myFish06);
console.log(removed06);

//Remove all elements, starting from index 2
let myFish07 = ["angel", "clown", "mandarin", "sturgeon"];
let removed07 = myFish07.splice(2);
console.log(myFish06);
console.log(removed07);
