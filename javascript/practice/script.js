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


