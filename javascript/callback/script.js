//Question1
// function execute(callback){
//     callback();
// };
// execute(function(){
//     console.log("Callback executed");
// })

//Question2
// function calculate(a, b, cb) {
//   const sum = a + b;
//   cb(sum);   // passing result to callback
// }
// // usage
// calculate(5, 7, function(result) {
//   console.log("Result:", result);
// });

//Question2
// function checkAge(age,cb){
//     if(age<18){
//         cb(new Error("Underage"), null);
//     }else{
//         cb(null, "Allowed");
//     }
// }
// checkAge(19,function(err,result){
//     if(err) {
//         console.log("Error:", err.message);
//     } else{
//         console.log("checkAge:", result);
//     } 
// })

//Question4
// function fetchData(cb){
//     setTimeout(() => {
//         cb("Data received")
//     },1000);
// }
// fetchData(function(result){
//     console.log("Result:", result);  
// })

//Question5
// function processNumbers(a,b,successCb,errorCb){
//     if(typeof a === "number" && typeof b === "number") return successCb(a+b);
//     return errorCb("❌ Invalid Input");
// };
// processNumbers(5,20,
//     function(result){
//         console.log("Success:",result);
//     },
//     function(err){
//         console.log("Error:",err);
//     }
// );


