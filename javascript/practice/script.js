// let age = prompt("Enter your age");

// if (age === null) {
//   console.error("You cancelled it.");
// //   return;
// }
// 7250

// age = age.trim();
// if (age === "") {
//   console.error("Please write something.");
// //   return;
// }

// age = Number(age);
// if (isNaN(age)) {
//   console.error("Please enter a number.");
// //   return;
// }

// if (age < 0) {
//   console.error("Not a valid age.");
// //   return;
// }

// console.log(age >= 18 ? "Eligible" : "Not eligible");

// Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.
// for(let i=1; i<11; i++){
//   console.log(`5 x ${i} = ${5*i}`);
// }

// Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// let count = 0;
// for(let i=1; i<16; i++){
//   if(i>8){
//     count++;
//   }
// }
// console.log("greater than 8", count);
// for (let i = 1; i <= 15; i++) {
//   if (i > 8) {
//     console.log(i);
//   }
// }

//  Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// let password = "Tauseef@"
// let pass = prompt("password btao");
// if(pass === null){
//   console.error("you cancelled it.");
// } else{
//   if(pass.trim() === ""){
//     console.error("please write proper");
//   } else{
//     if(pass===password){
//       console.log("access");
//     }else{
//       console.error("wrong password");
//       alert("❌ Wrong Password");
//     }
//   }
// }




//  Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
// let password= "Tauseef@ahmad";
// let pass= prompt("enter your password");
// if(pass=== null){
//   console.error("you cancelled it.");
// } else{
//   if(pass.trim()=== ""){
//     console.error("please write something");
//   } else if(pass !== password){
//     console.error("wrong password");
//   } else{
//     if(pass===password){
//       console.log("Access granted");
//     }
//   }
// }
// let password = "Tauseef@ahmad";
// let attempts = 3;

// for (let i = 1; i <= attempts; i++) {
//   let pass = prompt("Enter your password (Attempt " + i + " of " + attempts + "):");

//   if (pass === null) {
//     console.error("You cancelled it.");
//     break; // stop if user cancels
//   } else if (pass.trim() === "") {
//     console.error("Please write something.");
//   } else if (pass === password) {
//     console.log("Access granted ✅");
//     break; // stop the loop if correct
//   } else {
//     console.error("Wrong password ❌");
//     if (i === attempts) {
//       console.error("Account locked 🔒");
//     }
//   }
// }
// let Attempt = 0;
// let password = "tauseef";
// let pass = prompt("Enter your password");
// Attempt++;

// while (Attempt < 3 && pass !== password) {
//   console.error("Wrong password, try again!");
//   pass = prompt("Enter your password");
//   Attempt++;
// }

// if (pass === password) {
//   console.log("Access granted ✅");
// } else {
//   console.error("Account locked 🔒");
// }

// Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let Ask =prompt("write a word");
// let counter =0;
// while(Ask !== "stop"){
//   if(Ask==="yes") counter++
//   Ask =prompt("write a word");
// }
// console.log(`total time count: ${counter}`);

//Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// let i=1;
// while(i<=50){
//   if(i%7===0){
//     console.log(i);
//   }
//   i++;
// }

//Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let i=1;
// let sum=0;
// while(i<=30){
//   if(i%2===1){
//     sum =sum+i;
//   }
//   i++;
// }
// console.log("Sum of all odd numbers from 1 to 30 is:", sum);

//  Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// let num = prompt("write any number");
// num = Number(num);
// while(num%2 !==0){
//   num = prompt("write any number");
//   num = Number(num);
// }

//  Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// let start= +prompt("starting number do");
// let end= +prompt("end number do")
// if (isNaN(start) || isNaN(end)) {
//   console.error("Please numbers daalo!");
// } else {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// }

// Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// let i=1;
// let count=0;
// while(i<=20){
//     if(i%2!==0){
//         console.log(i);
//         count++;
//     }
//     if(count === 3){
//         break;
//     }
//     i++;
// }

// Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// let I = 1;
// let counter = 0;
// while (I <= 5) {
//   let num = prompt("Number " + i + " daalo:");
//   num = Number(num);

//   if (isNaN(num)) {
//     console.error("Please number daalo!");
//   } else {
//     if (num > 0) {
//       counter++;
//     }
//   }
//   I++;
// }
// console.log("Total positive numbers: " + count);


// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
// let balance = 1000;
// let attempt = 1;
// while (attempt <= 3) {
//   let amount = prompt("Withdrawal amount daalo (Attempt " + attempt + "):");
//   amount = Number(amount);
//   if (isNaN(amount) || amount <= 0) {
//     console.error("Please valid amount daalo!");
//   } else {
//     if (amount <= balance) {
//       balance -= amount;
//       console.log("Withdrawal successful! 💸");
//       console.log("Remaining balance: ₹" + balance);
//     } else {
//       console.log("❌ Insufficient balance! Current balance: ₹" + balance);
//     }
//   }
//   attempt++;
// }
// console.log("Session ended. Final balance: ₹" + balance);


