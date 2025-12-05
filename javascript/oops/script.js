//1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
let laptop = {
    brand: "Dell",
    model: "XPS 13",
    price: 48000,
    start : function(){
        console.log("Laptop is starting...");
    }
};
laptop.start(); // Calling the start method of the laptop object

//2.	Add one more method to the same object that increases the price by 10 percent.
laptop.increasePrice = function(){
    this.price = this.price + (this.price * 0.10);
    console.log("New price after 10% increase: " + this.price);
}
laptop.increasePrice(); // Calling the increasePrice method of the laptop object

//3. Now imagine you need 10 laptops with same structure but different data.
class Laptop {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    start() {
        console.log("Laptop is starting...");
    }
    increasePrice() {
        this.price = this.price + (this.price * 0.10);
        console.log("New price after 10% increase: " + this.price);
    }
}
laptop1 = new Laptop("Apple", "MacBook Air", 90000);
laptop2 = new Laptop("HP", "Spectre x360", 75000);
laptop3 = new Laptop("Lenovo", "ThinkPad X1", 85000);
console.log(laptop1, laptop2, laptop3);

//Create a class named Employee that stores: name salary Add a method showDetails that prints name and salary.
class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    };
    showDetails(){
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    };
};
emp1 = new Employee("Tauseef Ahmad", 50000);
emp1.showDetails();

//Create three employee objects from the same class and verify that modifying one employee does not affect the others.
let addEmployee = {
    emp1: new Employee("Tauseef Ahmad", 50000),
    emp2: new Employee("John Doe", 60000),
    emp3: new Employee("Jane Smith", 70000)
};
addEmployee.emp1.showDetails();
addEmployee.emp2.showDetails();
addEmployee.emp3.showDetails();
addEmployee.emp2.salary = 65000; // Modifying emp2's salary
console.log("After modifying emp2's salary:");
addEmployee.emp1.showDetails();
addEmployee.emp2.showDetails();
addEmployee.emp3.showDetails();

//Create a class named BankAccount. Its constructor should accept accountHolderName and balance.Inside the constructor, store both values using this. Add a method deposit(amount) that increases the balance. Create two bank accounts and deposit money into only one .Observe and explain why the second account is not affected.
class BankAccount{
    constructor(accountHolderName, balance){
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    }
};
let account1 = new BankAccount("Tauseef Ahmad", 1000);
let account2 = new BankAccount("Abdur Rahman", 2000);
account2.deposit(500); // Depositing money into account1
console.log("\nChecking both accounts:");
console.log(`Account 1 Balance: ${account1.balance}`);
console.log(`Account 2 Balance: ${account2.balance}`);
//Explanation: Each instance of the BankAccount class maintains its own state. When we deposit money into account2, it only affects account2's balance. Account1 remains unchanged because it is a separate object with its own balance property.

// Understanding this (Very Important)	Create an object named profile with a property username and a method printName that logs this.username.Call the method normally and observe the output.Store the method in a separate variable and call it.Observe what happens to this and explain why.Modify the code so that this works correctly again.
let profile = {
    username: "tauseefahmad",
    printName: function(){
        console.log(this.username);
    },
};
profile.printName(); // Calling the method normally
let print = profile.printName;
print(); // Calling the method stored in a separate variable
//Explanation: When we call profile.printName(), this refers to the profile object, so it correctly logs the username. However, when we store the method in a separate variable and call it, this no longer refers to the profile object; instead, it refers to the global object (or undefined in strict mode), resulting in undefined output.
//To fix this, we can use the bind method to explicitly set this to the profile object.
let boundPrint = profile.printName.bind(profile);
boundPrint(); // Now this correctly refers to the profile object

//(Constructor Function and Prototype). 
// Create a constructor function called Vehicle that accepts type and wheels.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.	Move the same method to Vehicle.prototype and repeat the test.Explain why the prototype approach is preferred.
class Vehicle {
    constructor(type, wheels) {
        this.type = type;
        this.wheels = wheels;
    }
    describe() {
        console.log(`Type: ${this.type}, Wheels: ${this.wheels}`);
    }
};
let v1 = new Vehicle("Car", 4);
let v2 = new Vehicle("Bike", 2);
let v3 = new Vehicle("Cycle", 2);
v1.describe();
v2.describe();
v3.describe();

//call Method Practice	Create a function showBrand that prints this.brand. Create two different objects with brand values.	Use call to execute showBrand for both objects.	Explain what problem call is solving here.
function showBrand(){
    console.log(this.brand); 
}
let obj1 = {
    brand:"Zara"
}
let obj2 = {
    brand:"nike"
}
showBrand.call(obj1);
showBrand.call(obj2);

//Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.	Create an object with a name property.	Use apply to call introduce using the object and an array of arguments.	Explain in simple words how apply differs from call.
function introduce(city, role) {
    console.log(`Name: ${this.name} City: ${city}  Role: ${role}`);
}
let person1 = {
    name:"Tauseef",
};
introduce.apply(person1,["Bhopal","software developer"]);
introduce.call(person1, "Indore", "Developer");

//Create a function greet that prints “Hello” followed by this.name.	Bind this function to an object and store the returned function in a variable.	Call the bound function later and observe the output.	Explain why bind is useful when functions are executed later or inside callbacks.
function greet(){
    console.log("Hello" + " " + this.name); 
};
const user = {
    name: "Tauseef"
};
let greetUser = greet.bind(user);
greetUser();