//Print even numbers from 1 to 50 using a while loop.
// let i=1;
// while(i<=50){
//     if(i%2 === 0){
//         console.log(i);
//     }
//     i++;
// }

//Print the multiplication table of any number (for example, 7) using a for loop.
// for(let i=0; i<=10; i++){
//     console.log(`7 x ${i} = ${7*i}`);
// }

//Find the sum of all numbers between 1 and 100 using a loop.
// let i=1;
// let sum=0;
// while(i<=100){
//     if(i){
//        sum = sum+i;
//     }
//     i++;
// }
// console.log("sum of all number between 1 to 100 is:" , sum)

//Print all numbers between 1 and 100 that are divisible by both 3 and 5, but stop the loop if the number reaches 75.
// let i=1;
// while(i<=100){
//     if(i%3===0 && i%5===0){
//         console.log(i);
//     }
//     if(i===75){
//         break;
//     }
//     i++;
// }

//Reverse a string (for example "hello" → "olleh") using a loop.
// let str = "hello";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }
// console.log(reversed);

//Count how many vowels are in a given string using a for loop.
// let str = prompt("Enter a string:");
// let count = 0;
// let vowels = "aeiouAEIOU";
// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {
//     count++;
//   }
// }
// console.log("Total vowels:", count);

//Use a nested loop to print this pattern:
// *
// **
// ***
// ****
// *****
// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

//Skip numbers divisible by 4 while printing 1 to 20 using continue.
// let i=1;
// while(i<=20){
//     if(i%4 ===0){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// 2. function
//Create a function greetUser(name) that prints "Hello, <name>!".
// function greetuser(name){
//       console.log("hello, "+name+ "!");
// }
// greetuser("Tauseef");

// Create a function addNumbers(a, b) that returns the sum of two numbers
// function addNumbers(a,b){
//     console.log(a+b);
//     return;
// }
// addNumbers(1,3);
// function addNumbers(a,b){
//     return a+b;
// }
// let sum = addNumbers(3,9);
// console.log(sum);
// sum= addNumbers(12,24);
// console.log(sum);

// Create a function square(num) that returns the square of a number.
// function square(num){
//     return num*num;
// }
// let number= square(8);
// console.log(number);

// Write a function isEven(num) that checks if a number is even or not.
// function isEven(num){
//     if(num%2===0){
//         return "even";
//     } else{
//         return "not even";
//     }
// }
// let number= isEven(577);
// console.log(number);

//Create a function findArea(length, width) that returns the area of a rectangle.
// function findArea(length, width){
//     return length*width;
// }
// let rectangle= findArea(15,5);
// console.log(`Area of rectangle is: ${rectangle}`);

// Create a function getFullName(firstName, lastName) that returns the full name.
// function getFullName(firstName, lastName){
//     return firstName+" "+lastName;
// }
// let fullname = getFullName("Tauseef","Ahmad");
// console.log(fullname);

// Write a function getMax(a, b) that returns the larger of two numbers.
// function getMax(a, b){
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }
// }
// let number = getMax(400,500);
// console.log(number);

