//1.1: Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.
let arr = [5, 3, 8, 1];
const filterRange = (arr, a, b) => {
  const newArr = arr.filter((item) => {
    return item >= a && item <= b;
  });
  console.log(...newArr);
};
// filterRange(arr, 1, 4);

// 2: Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.
let arrS = [5, 3, 8, 1, 2, 2, 6];
const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < a || value > b) {
      arr.splice(i, 1);
    }
  }
};
filterRangeInPlace(arrS, 1, 4);
console.log(arrS);
// 3:We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.
let textArray = ["HTML", "CSS", "JavaScript", "TypeScript"];

const copySorted = (arr) => {
  return (newText = arr.slice().sort());
};
console.log(copySorted(textArray));

console.log(textArray);

// 4: You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

let names = users.map((item) => {
  return item.name;
});
console.log(names);

// 5: You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
let people = [
  { name: "John", surname: "Smith", id: 1 },
  { name: "Pete", surname: "Hunt", id: 2 },
  { name: "Mary", surname: "Key", id: 3 },
];
for (let i = 0; i < people.length; i++) {
  people[i].fullname = `${people[i].name} ${people[i].surname}`;
  delete people[i].name;
  delete people[i].surname;
}
console.log(people);

// 6: Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
let usersName = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];
const sortByAge = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};
console.log(sortByAge(usersName));

// 7: Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements.
let shuffleArray = [1, 4, 5, 6, 3, 2];
const shuffle = (arr) => {
  let newShuffle = shuffleArray.sort(() => Math.random() - 0.5);
  console.log(newShuffle);
};
shuffle(shuffleArray);
shuffle(shuffleArray);
shuffle(shuffleArray);

// 8*: Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.
