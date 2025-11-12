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

