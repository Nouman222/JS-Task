// Task 1
// Problem: 
// Write a program that takes an integer as input and prints whether the number is positive, 
// negative, or zero. 
// Example: 
// Input: 5 
// Output: Positive number 
// let num = Number(prompt("Input:"));
// if (num > 0) {
//     console.log("Output: Positive number");
// } else if (num < 0) {
//     console.log("Output: Negative number");
// } else {
//     console.log("Output: Zero");
// }

// Task 2
// Write a program that takes an integer as input and checks whether the number is even or odd. It 
// should print “Even” or “Odd” based on the input. 
// Example: 
// Input: 7 
// Output: Odd
// let num2 = Number(prompt("Input:"));
// if (num2 % 2 === 0) {
//     console.log("Output: Even");
// } else {
//     console.log("Output: Odd");
// }

// Task 3
// Problem: 
// Write a program that asks for the user’s age and checks if they are eligible to vote. The voting 
// age is 18 or older. 
// Example: 
// Input: 19 
// Output: Eligible to vote 
// let age = Number(prompt("Input your age:"));
// if (age >= 18) {
//     console.log("Output: Eligible to vote");
// } else {
//     console.log("Output: Not eligible to vote");
// }

// Task 4
// Write a program that takes three numbers as input and prints the largest one. Use conditional 
// statements. 
// Example: 
// Input: 3, 9, 5 
// Output: 9 

// let a = Number(prompt("Enter first number:"));
// let b = Number(prompt("Enter second number:"));
// let c = Number(prompt("Enter third number:"));

// if (a >= b && a >= c) {
//     console.log(`Output: ${a}`);
// } else if (b >= a && b >= c) {
//     console.log(`Output: ${b}`);
// } else {
//     console.log(`Output: ${c}`);
// }

// Task 5
// Problem: 
// Write a program that takes two numbers as input and compares them using comparison 
// operators. It should print: 
//  "Equal" if the numbers are the same 
//  "Greater" if the first number is greater 
//  "Smaller" if the first number is smaller 
// Example: 
// Input: 7 and 10 
// Output: Smaller
// let num3 = Number(prompt("Enter first number:"));
// let num4 = Number(prompt("Enter second number:"));

// if (num3 === num4) {
//     console.log("Output: Equal");
// } else if (num3 > num4) {
//     console.log("Output: Greater");
// } else {
//     console.log("Output: Smaller");
// }


// Task 6
// Problem: 
// Write a program that takes two inputs representing the current day and the temperature. 
//  If the day is "Saturday" or "Sunday" and the temperature is above 30°C, it should print 
// “It’s a great day for the beach.” 
//  Otherwise, it should print “Not a beach day today.” 
// Example: 
// Input: Day = Saturday, Temperature = 32 
// Output: It’s a great day for the beach
// let day = prompt("Enter the current day:");
// let temp = Number(prompt("Enter the temperature in °C:"));

// if ((day === "Saturday" || day === "Sunday") && temp > 30) {
//     console.log("It’s a great day for the beach.");
// } else {
//     console.log("Not a beach day today.");
// }

// Task 7
// Problem: 
// Write a program that takes a student's score (between 0 and 100) and classifies it into one of the 
// following grades: 
//  A (90-100) 
//  B (80-89) 
//  C (70-79) 
//  D (60-69) 
//  F (Below 60) 
// Example: 
// Input: 85 
// Output: Grade B 
// let score = Number(prompt("Enter the student's score (0-100):"));

// if (score >= 90 && score <= 100) {
//     console.log("Grade A");
// } else if (score >= 80) {
//     console.log("Grade B");
// } else if (score >= 70) {
//     console.log("Grade C");
// } else if (score >= 60) {
//     console.log("Grade D");
// } else {
//     console.log("Grade F");
// }

// Task 8
// Problem: 
// Write a program that checks whether a given year is a leap year. A leap year: 
//  Is divisible by 4, but not by 100, unless it is also divisible by 400. 
// Example: 
// Input: 2024 
// Output: Leap Year 
// let year = Number(prompt("Enter a year:"));

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log("Leap Year");
// } else {
//     console.log("Not a Leap Year");
// }

// Task 9
// Problem: 
// Write a program that takes the total amount of a purchase and checks if the customer is eligible 
// for a discount: 
//  If the purchase is greater than $100, apply a 10% discount. 
//  Otherwise, print "No discount." 
// Example: 
// Input: 120 
// Output: You get a 10% discount. Final price is $108. 

// let amount = Number(prompt("Enter total purchase amount:"));

// if (amount > 100) {
//     let discount = amount * 0.10;
//     let finalPrice = amount - discount;
//     console.log(`You get a 10% discount. Final price is $${finalPrice.toFixed(2)}.`);
// } else {
//     console.log("No discount.");
// }

// Task 10 
// Problem: 
// Write a program that asks the user for a letter and checks if it's a vowel (a, e, i, o, u) or a 
// consonant. It should output the appropriate message. 
// Example: 
// Input: e 
// Output: Vowel 
// let letter = prompt("Enter a single letter:").toLowerCase();

// if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }

// Task 11
// Problem: 
// Write a program that calculates the Body Mass Index (BMI) and classifies it: 
//  Underweight: BMI < 18.5 
//  Normal weight: 18.5 <= BMI < 24.9 
//  Overweight: BMI >= 25 
// Use the formula: 
// BMI = weight (kg) / (height (m) * height (m)) 
// Example: 
// Input: Weight = 70, Height = 1.75 
// Output: Normal weight 

// let weight = number(prompt("Enter your weight"))
// let height = number(prompt("Enter your hight in Meter"))
// let bmi = weight / height*height
// if (bmi<18.5){
//     console.log("Underweight")
// }
// else if (bmi<24.9){
//     console.log("Normal weight")
// }
// else{
//     console.log("Overweight")
// }


// Task 1
//  Log Alice's name and age. 
//  Log the manager's phone number. 
//  Log the price of the first product. 
// const company = { 
// employees: [ 
// { name: "Alice", age: 28, position: "Developer" }, 
// { name: "Bob", age: 35, position: "Manager" } 
// ], 
// products: [ 
// { name: "Laptop", price: 999 }, 
// { name: "Phone", price: 499 } 
// ], 
// managerContact: { 
// phone: "555-1234", 
// email: "bob@company.com" 
// } 
// }; 

// console.log(company.employees[0].name,company.employees[0].age)
// console.log(company.managerContact.phone)
// console.log(company.products[0].price)


// Task 2
//  Update the price of Eggs to 4.99. 
//  Log the entire groceries array after the update. 
// const shoppingList = { 
// groceries: [ 
// { name: "Milk", price: 2.49 }, 
// { name: "Eggs", price: 3.99 }, 
// { name: "Bread", price: 1.89 } 
// ] 
// }; 

// shoppingList.groceries[1].price = 4.99
// console.log(shoppingList.groceries)


// Task 3
//  Log the names of the students in the class. 
//  Log the subjects of the first student. 
// const school = { 
// class: "10th Grade", 
// students: [ 
// { name: "John", subjects: ["Math", "Science", "History"] }, 
// { name: "Mia", subjects: ["English", "Geography", "Math"] } 
// ] 
// }; 

// console.log(school.students[0].name); 
// console.log(school.students[1].name);
// console.log(school.students[0].subjects); 

// Task 4
//  Log Jake's second skill. 
//  Log Sara's third skill. 
// const team = { 
// members: [ 
// { name: "Jake", skills: ["JavaScript", "React", "Node.js"] }, 
// { name: "Sara", skills: ["HTML", "CSS", "JavaScript"] } 
// ] 
// }; 

// console.log(team.members[0].skills[1]); 
// console.log(team.members[1].skills[2]);

// Task 5
//  Log the year of the car. 
//  Log the second feature of the car. 
//  Log the color of the car. 
// const car = { 
// make: "Toyota", 
// model: "Corolla", 
// details: { 
// year: 2020, 
// features: ["Bluetooth", "Backup Camera", "Sunroof"], 
// color: "Blue" 
// } 
// }; 
// console.log(car.details.year); 
// console.log(car.details.features[1]);
// console.log(car.details.color);

// Task 6
//  Log the name of the first student. 
//  Log the first grade of the second student. 
// const students = [ 
// { name: "Emily", grades: [85, 92, 88] }, 
// { name: "Liam", grades: [78, 84, 91] } 
// ]; 

// console.log(students[0].name); 
// console.log(students[1].grades[0]); 

// Task 7
// Log the price of the first fruit (Apple). 
// const shoppingList = { 
// fruits: [ 
// { name: "Apple", price: 1.5 }, 
// { name: "Banana", price: 0.9 } 
// ], 
// vegetables: [ 
// { name: "Carrot", price: 2.0 }, 
// { name: "Spinach", price: 1.8 } 
// ] 
// };

console.log(shoppingList.fruits[0].price)

// Task 8
//  Change the time of the second class (English) to "10:00 AM". 
//  Log the entire classes array after the update. 
// const schedule = { 
// classes: [ 
// { name: "Math", time: "9:00 AM" }, 
// { name: "English", time: "11:00 AM" }, 
// { name: "Science", time: "1:00 PM" } 
// ] 
// }; 

// schedule.classes[1].time = "10:00 AM";
// console.log(schedule.classes);

// Task 9
// const userProfile = { 
//   username: "john_doe", 
//   profileDetails: { 
//     name: "John Doe", 
//     age: 29, 
//     address: { 
//       street: "123 Main St", 
//       city: "Springfield" 
//     } 
//   } 
// };

// console.log(userProfile.profileDetails.address.street);
// console.log(userProfile.profileDetails.address.city);

// Task 10
// const userPlaylist = { 
//   username: "jane_smith", 
//   favorites: ["Song 1", "Song 2", "Song 3"] 
// };

// userPlaylist.favorites.push("Song 4");
// console.log(userPlaylist.favorites);


// Create a variable num and:

// Check if it is even or odd

// Print result using console.log

// ❌ No loops

// ❌ No functions

// let num = 10
// if(num>0 && num %2==0){
//     console.log(`The ${num} number is even`)
// }
// else{
//     console.log(`The ${num} number is odd`)
// }

// 🔹 Task 2: Simple Calculator

// Create variables:

// let a = 10;
// let b = 5;
// let operator = "+";
// Use if / else or switch to:
// Add, subtract, multiply, or divide
// Print the result
// let a = 10;
// let b = 5;
// let operator = "**";
// let result;
// switch (operator) {
//     case "+":
//         result = a + b
//         break;
//     case "-":
//         result = a - b
//         break;
//     case "*":
//         result = a * b
//         break;
//     case "/":
//         result = a / b
//         break;
//     case "**":
//         result = a ** b
//         break;

//     default:
//         result= "Invalid Operator"
//         break;
// }
// console.log(result)




// 🔹 Task 3: Largest Number

// Create three variables:

// let x = 15;
// let y = 20;
// let z = 10;
// Find the largest number using if / else only.
// let x = 15;
// let y = 20;
// let z = 10;
// if(x>y && x>z){
//     console.log(`The ${x} is Largest Number`)
// }
// else if (y>x && y>z){
//     console.log(`The ${y} is Largest Number`)
// }
// else{ 
//     console.log(`The ${z} is Largest Number`)
// }


// 🔹 Task 4: Grade System

// Create a variable marks = 78

// Print:

// "A" if marks ≥ 90

// "B" if marks ≥ 75

// "C" if marks ≥ 60

// "Fail" otherwise
// let marks = 78
// if(marks>=90){
//     console.log("A")
// }
// else if(marks>=75){
//     console.log("B")
// }
// else if(marks>=60){
//     console.log("C")
// }
// else{
//     console.log("Fail")
// }


// 🔹 Task 5: Login Validation

// Create variables:

// let username = "admin";
// let password = "1234";


// Check login:

// Correct → "Login Successful"

// Wrong → "Invalid Login"
// let username = "admin";
// let password = "1234";
// if(username==="admin" && password==="1234"){
//     console.log("Login Successful")
// }
// else{
//     console.log("Invalid Login")
// }


// 🔹 Task 6: Object Property Using Variable

// Create an object:

// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022
// };
// Create a variable:
// let key = "model";
// Access and print the value using the variable.
// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022
// };

// let key = "model";
// console.log(car[key]);


// 🔹 Task 7: String Length Check

// Create:

// let text = "JavaScript";
// If length > 8:
// Print "Long Text"
// Else:
// Print "Short Text"
// let text = "JavaScript";
// if(text.length>8){
//     console.log("Long Text");  
// }
// else{
//     console.log("Short Text");
    
// }

// 🔹 Task 8: Discount System

// Create:
// let price = 4500;
// Apply:
// ≥ 5000 → 20% discount
// ≥ 3000 → 10% discount
// Else → no discount
// Print final price.
// let price = 4500;
// let final_price;

// if(price >= 5000){
//     final_price = price - (price * 20 / 100);
// }
// else if(price >= 3000){
//     final_price = price - (price * 10 / 100);
// }
// else{
//     final_price = price;
// }
// console.log(final_price);


// 🔹 Task 9: Age Category
// Create:
// let age = 22;
// Print:
// "Child" (<13)
// "Teenager" (13–19)
// "Adult" (20+)
// let age = 22
// if(age<13){
//     console.log("Child")
// }
// else if(age>=13 && age<=19){
//     console.log("Teenager")
// }
// else{
//     console.log("Adult")
// }




