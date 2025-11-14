// function add(a, b){
//     return a+b;
// }
// console.log(add(15,25));

// Write a function with a default parameter `name =
// "Guest"` that prints `"Hi <name>"`.
// function greeting(guest = "guest"){
//     console.log(`hi ${guest}`);
// }
// greeting("tauseef");

//Use rest parameters to make a function that adds
// unlimited numbers.
// function add(...num) {
//     let sum = 0;
//     for (let n of num) {
//         sum += n;
//     }
//     return sum;
// }
// console.log(add(2, 4, 6, 8, 10,5,56));
// const add = (...num) => num.reduce((a, b) => a + b, 0);
// console.log(add(5, 10, 15, 20)); // Output: 50

//Create an IIFE that prints `"I run instantly!"`.
// (function(){
//     console.log("I run instantly!");
// }())

//Make a nested function where the inner one prints a variable from the outer one.
// function parent() {
//     let i = 1;
//     function child() {
//         console.log("Outer variable i ki value hai:", i);
//     }
//     while (i <= 20) {
//         console.log(i); 
//         if (i === 10) {
//             child();
//         }
//         i++;
//     }
// }
// parent(); 

//Create an array of 5 fruits. Add one at the end and remove one from the beginning.
// let arr = ["apple", "mango", "orange", "banana", "papaya"];
// arr.push("Lichi");
// arr.shift();
// console.log(arr);

//Use a `for` loop to print all elements of an array.
// let arr = ["tauseef","abdur","musa"];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//Create an object `person` with keys `name`, `age`,and `city`, and print each key’s value.
// let person= {
//     name : "tauseef",
//     age : 22,
//     city : "Bhopal",
// };
// for(let key in person){
//     console.log(person[key]);
// }

//Use `setTimeout()` to log `"Time’s up!"` after 2seconds
// setTimeout(function(){
//     console.log("Time’s up!");
// }, 2000);

//Level 2 – Functional Thinking & Logic Tasks (Intermediate)

//Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
// function runTwice(fn){
//     fn();
//     fn();
// }
// function greet(){
//     console.log("Hello, Tauseef!");
// }
// runTwice(greet);

// Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
// function abcd(val){
//     console.log(val +2);
// }
// abcd(6);
// abcd(6);
// let count = 5;
// function addToCount(val) {
//     count = count + val;
//     return count;
// }
// console.log(addToCount(2));
// console.log(addToCount(2));

//Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
// function printInfo({ name, age, city}) {
//     console.log("Name:", name);
//     console.log("Age:", age);
//     console.log("city:", city);
// }
// const person = {
//     name: "Tauseef",
//     age: 22,
//     city: "Bhopal"
// };
// printInfo(person);

// // Given an array of numbers, use `map()` to create a new array where each number is squared.
// let arr = [1,2,3,8,10,15];
// let arr1 = arr.map(function(n){
//     return n*n;
// });
// console.log(arr1);

// //Use `filter()` to get only even numbers from an array.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arr1 = arr.filter(function(val){
//     return val%2 === 0;
// })
// console.log(arr1);

// //Use `reduce()` to find the total salary from an array of numbers [1000, 2000, 3000]
// let salary=[1000, 2000, 3000,15000];
// let total=salary.reduce(function(sum,salary){
//     return sum+salary;
// });
// console.log(total);

// //Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
// let arr=["Tauseef","Abdur","Musa","Modabbir",];
// let allLongerThan3 = arr.every(function(name){
//     return name.length > 3;
// });
// console.log(allLongerThan3);
// let shorterThan3 = arr.some(function(name){
//     return name.length < 3;
// });
// console.log(shorterThan3);

