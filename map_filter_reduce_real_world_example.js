const users = [
  { firstName: "Bob", lastName: "Smith", age: 26 },
  { firstName: "John", lastName: "Doe", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Donal", lastName: "Trump", age: 80 },
  { firstName: "Bill", lastName: "Gates", age: 55 },
  { firstName: "Tim", lastName: "Cook", age: 35 },
  { firstName: "Steve", lastName: "Jobs", age: 55 },
];
// list of full names of users
// ["Bob Smith", "John Doe", "Elon Musk", "Donald Trump", "Bill Gates", "Tim Cook"]

const fullNames = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullNames);

// ageCounts {26: 1, 35: 1, 50: 1, 55: 2, 75: 1, 80: 1}

const ageCounts = users.reduce(function (accumulatorValue, user) {
  if (accumulatorValue[user.age]) {
    accumulatorValue[user.age]++;
  } else accumulatorValue[user.age] = 1;
  return accumulatorValue;
}, {});
console.log(ageCounts);

// firstName is age less than 75 ["Bob", "Elon", "Bill", "Tim", "Steve"]

const firstNames = users
  .filter((user) => user.age < 75)
  .map((user) => user.firstName);
console.log(firstNames);

const firstNamesByAgeLessThan75 = users.reduce(function (
  accumulatorValue,
  user
) {
  if (user.age < 75) {
    accumulatorValue.push(user.firstName);
  }
  return accumulatorValue;
},
[]);
console.log(firstNamesByAgeLessThan75);
