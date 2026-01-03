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

// console.log(shoppingList.fruits[0].price)

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


// -------------------------------------
// Loops
// 🔁 Task 1: for Loop
// Task:
// Print numbers from 1 to 10 using a for loop.
// Expected Output:
// 1
// 2
// 3
// ...
// 10
// for(let i =1;i<11;i++){
//     console.log(i)
// }
// Print only even numbers from 1 to 20
// for(let i =1;i<21;i++){
//     if(i %2 == 0){
//         console.log(i+" Even Number")
//     }
// }

// 🔄 Task 2: while Loop
// Task:
// Print the table of 5 (5 × 1 to 5 × 10) using a while loop.
// Expected Output:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
// i=5
// a=1
// while(i<51 && a<11){
//     console.log(i*a)
//     a++
// }

// Print numbers from 10 to 1 (reverse counting).
// i=10
// while(i>0){
//     console.log(i)
//     i--
// }

// 🔁 Task 3: do...while Loop

// Task:
// Print numbers from 1 to 5 using a do...while loop.
// Expected Output:
// 1
// 2
// 3
// 4
// 5
// i = 1
// do {
//     console.log(i)
//     i++
// }
// while(i<6)

// Print "Hello JavaScript" 5 times.
// i = 1
// do {
//     console.log(i+" Hello JavaScript")
//     i++
// }
// while(i<6)

// ⭐ Bonus Task (Mix Thinking)
// Using any one loop, find the sum of numbers from 1 to 10.
// Expected Output:
// Sum = 55
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }
// console.log("Sum =", sum);

// 🔰 LEVEL 1: Variables + Data Conversion
// Task 1
// Create a variable:
// let price = "150";
// Convert it to a number and:
// add 50
// subtract 20
// let price = "150";
// price = Number(price);
// console.log(price + 50);  
// console.log(price - 20);   


// Task 2
// Create a variable:
// let isLoggedIn = "true";
// Convert it into a boolean and print the result.
// let isLoggedIn = "true";
// isLoggedIn = Boolean(isLoggedIn);
// console.log(isLoggedIn);


// Task 3
// Create a number variable:
// let score = 78;
// Convert it into a string and print:
// Your score is: 78
// let score = 78;
// score = String(score);
// console.log("Your score is: " + score);

// 📦 LEVEL 2: Arrays (Basic → Logic)
// Task 4
// Create an array of 6 numbers.
// Using a loop:
// print all numbers
// count how many numbers are greater than 50
// let numbers = [10, 45, 60, 80, 30, 90];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   if (numbers[i] > 50) {
//     count++;
//   }
// }

// console.log("Greater than 50:", count);

// Task 5
// Create an array:
// [3, 6, 9, 12, 15]
// Using a loop:
// multiply each value by 2
// print the result
// let arr = [3, 6, 9, 12, 15];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

// Task 6
// Create an array of ages:
// [12, 18, 25, 30, 16, 40]
// Using a loop:
// print ages 18 or above
// count how many are below 18
// 🧱 LEVEL 3: Objects
// let ages = [12, 18, 25, 30, 16, 40];
// let below18 = 0;

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     console.log("Adult:", ages[i]);
//   } else {
//     below18++;
//   }
// }

// console.log("Below 18 count:", below18);

// Task 7
// Create an object user with:
// username
// email
// isActive
// Print all properties using a loop.
// let user = {
//   username: "nouman",
//   email: "nouman@gmail.com",
//   isActive: true
// };

// for (let key in user) {
//   console.log(key + ":", user[key]);
// }


// Task 8
// Create an object mobile with:
// brand
// model
// price
// If price is greater than 50,000, print:
// Expensive Phone
// Otherwise:
// Affordable Phone
// let mobile = {
//   brand: "Samsung",
//   model: "A51",
//   price: 55000
// };

// if (mobile.price > 50000) {
//   console.log("Expensive Phone");
// } else {
//   console.log("Affordable Phone");
// }

// 🔁 LEVEL 4: Loops + Conditions
// Task 9
// Using a loop:
// print numbers from 1 to 30
// if number is divisible by 3, print "Fizz"
// if divisible by 5, print "Buzz"
// if divisible by both, print "FizzBuzz"
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Task 10
// Create an array:
// [10, 25, 5, 40, 15]
// Using a loop:
// find the smallest number
// let nums = [10, 25, 5, 40, 15];
// let smallest = nums[0];

// for (let i = 1; i < nums.length; i++) {
//   if (nums[i] < smallest) {
//     smallest = nums[i];
//   }
// }

// console.log("Smallest number:", smallest);


// for of and for in loop
// Print each number using for...of
// let numbers = [10, 20, 30, 40, 50];
// for(num of numbers){
//     console.log(num)
// }
// Find and print the total sum
// let marks = [60, 70, 80, 90];
// let total = 0;
// for (let score of marks) {
//   total = total + score;
// }
// console.log("Total Marks:", total);


// 👉 Print key and value
// let student = {
//   name: "Nouman",
//   age: 22,
//   course: "Web Development"
// };
// for (keyval in student ){
//     console.log(keyval,student[keyval])
// }

// 👉 Print all numbers using nested for...of
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];
// for(let val of matrix){
//     for(let nval of val){
//         console.log(nval)
//     }
// }

// 🟢 FOR...OF LOOP TASKS (Arrays)

// 🔹 Task 1: Print Values
// 👉 Print each city
// let cities = ["Lahore", "Karachi", "Islamabad"];
// for(let city of cities){
//     console.log(city)
// }

// 🔹 Task 2: Count Total
// 👉 Find total price
// let prices = [100, 200, 300, 400];
// let total=0
// for(let price of prices){
//     total=total+price
// }
// console.log(total)

// 🔹 Task 3: Even Numbers Only
// 👉 Print only even numbers
// let nums = [5, 10, 15, 20, 25, 30];
// for(let num of nums){
//     if(num %2==0){
//         console.log(num)
//     }
// }

// 🔹 Task 4: Nested Array
// 👉 Print all numbers
// let data = [
//   [2, 4],
//   [6, 8],
//   [10, 12]
// ];
// for (let item of data){
//     console.log(item)
// }

// 🔹 Task 5: Array of Objects
// 👉 Print:
// Babar scored 90
// Rizwan scored 75
// let players = [
//   { name: "Babar", score: 90 },
//   { name: "Rizwan", score: 75 }
// ];
// for(let key of players){
//     console.log(key)
// }

// 🔵 FOR...IN LOOP TASKS (Objects)
// 🔹 Task 6: Print Keys & Values
// 👉 Print key and value
// let mobile = {
//   brand: "Samsung",
//   price: 50000,
//   color: "Black"
// };
// for(let key in mobile){
//     for(val in key){
//         let keyval= key,val
//         console.log(keyval)
//     }
// }

// 🔹 Task 7: Count Properties
// 👉 Count how many properties
// let car = {
//   name: "Civic",
//   model: 2022,
//   color: "White",
//   automatic: true
// };
// let countP = 0
// for(let properties in car){
//     countP = properties
// }
// console.log(countP)


// 🔹 Task 8: Nested Object
// 👉 Print all values
// let employee = {
//   name: "Nouman",
//   department: {
//     name: "IT",
//     floor: 3
//   }
// };
// for (const key in employee) {
//     const element = employee[key];
//     console.log(element)
// }

// 🔴 CHALLENGE TASK (Mixed 💪)
// 🔹 Task 9: Object + Array
// 👉 Output:
// Web
// Design
// AI
// let school = {
//   name: "City School",
//   classes: ["Web", "Design", "AI"]
// };
// for(let key in school){
//     if(key=="classes"){
//         console.log(school[key])
//     }
// }

// 🔹 Task 10: Array + Object
// 👉 Print total amount
// let orders = [
//   { id: 1, amount: 1500 },
//   { id: 2, amount: 3000 }
// ];


// ✅ Task 1: Simple Function (Basic)

// Task:
// Create a function that prints “Hello JavaScript” in the console.
// Requirements:
// Function name: sayHello
// Call the function
// function sayHello(){
//     console.log("Hello JavaScript")
// }
// sayHello()

// ✅ Task 2: Function with Parameters
// Task:
// Create a function that takes two numbers and prints their sum.
// Example Output:
// If numbers are 5 and 3 → Output should be 8
// Requirements:
// Function name: addNumbers
// Use parameters
// function addNumbers(a,b){
//     console.log(a+b)
// }
// addNumbers(5,3)

// ✅ Task 3: Function with Return
// Task:
// Create a function that takes a number and returns “Even” or “Odd”.
// Example:
// Input: 4 → Output: Even
// Input: 7 → Output: Odd
// Hint:
// Use % (modulus operator)
// function evenOdd(a){
//     if(a % 2 === 0){
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// console.log(evenOdd(4));
// console.log(evenOdd(5));

// ✅ Task 4: Function with Array
// Task:
// Create a function that takes an array of numbers and returns the total sum.
// Example Array:
// [10, 20, 30]
// Output:
// 60
// function addition(arr){
//     let totalSum = 0;   // inside function
//     for(let num of arr){
//         totalSum = totalSum + num;
//     }
//     return totalSum;
// }

// let array = [10, 20, 30];
// console.log(addition(array));

// ✅ Task 5: Function with Object (Real Life Example)
// Task:
// Create a function that takes an object and prints user details.
// Example Object:
// {
//   name: "Nouman",
//   age: 22,
//   role: "MERN Developer"
// }
// Output:
// Name: Nouman
// Age: 22
// Role: MERN Developer
// let object={
//   name: "Nouman",
//   age: 22,
//   role: "MERN Developer"
// }
// let object = {
//   name: "Nouman",
//   age: 22,
//   role: "MERN Developer"
// };

// function printObj(obj){
//     for(let key in obj){
//         console.log(key + ": " + obj[key]);
//     }
// }

// printObj(object);

// Task 1: Count Vowels in a String
// Create a function that:
// Takes a string
// Counts how many vowels (a, e, i, o, u) are in it
// Returns the count
// 👉 Example:
// countVowels("javascript") → 3

// function countVowels(str) {
//   let count = 0;
//   let vowels = "aeiouAEIOU";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countVowels("Nomi khan"));


// 📘 Part 1: Basic Function Tasks
// Task 1 — Add Two Numbers
// Use: function, parameters, return
// Flow / steps:
// 1.	Define a function with two parameters (a, b).
// 2.	Inside the function add them (sum = a + b).
// 3.	Return the result.
// Example: input (3,5) → output 8.

// function add(a,b){
//     return a+b
// }
// console.log(add(3,5));


// Task 2 — Check Even or Odd
// Use: function, arithmetic operator %, conditional (if/else)
// Flow / steps:
// 1.	Create a function taking one number.
// 2.	Compute num % 2.
// 3.	If remainder is 0 → return "Even", else "Odd".
// Example: 7 → "Odd".
// function checkEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(checkEvenOrOdd(7)); 

// Task 3 — Celsius → Fahrenheit
// Use: function, arithmetic
// Flow / steps:
// 1.	Function accepts celsius.
// 2.	Apply formula fahrenheit = celsius * 1.8 + 32.
// 3.	Return value (optionally round).
// Example: 0 → 32.
// function convertToFahrenheit(celsius) {
//   const fahrenheit = celsius * 1.8 + 32;
//   return fahrenheit;
// }
// console.log(convertToFahrenheit(0)); 

// Task 4 — Return Full Name
// Use: function, string concatenation
// Flow / steps:
// 1.	Function accepts firstName and lastName.
// 2.	Join them with a space (firstName + " " + lastName).
// 3.	Return the full string.
// Example: ("Ali","Khan") → "Ali Khan".
// function getFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// console.log(getFullName("Ali", "Khan")); 

// Task 5 — Square a Number
// Use: function, arithmetic (*)
// Flow / steps:
// 1.	Function takes num.
// 2.	Compute num * num.
// 3.	Return result.
// Example: 4 → 16.
// function squareNumber(num) {
//   return num * num;
// }
// console.log(squareNumber(4));

// let kgk="2 Nouman 21 BSIT MERNDEVeloper"
// let cta = kgk.split(" ")
// console.log(cta)

// let cts = cta.join("|")
// console.log(cts);

// let number=50
// console.log(Number.isFinite(number))
// let number2=5266448
// console.log(Number.isFinite(number2))
// let number3=895575
// console.log(isNaN(number3))
// let number4=895575
// console.log(isNaN(number4))

// An employee can login to the company system only if the password is correct.
// Tasks:
//  Create a variable:
// o isPasswordCorrect
//  Use if / else to:

// // Variable to check password status
// let isPasswordCorrect = true;

// // If password is correct, login successful
// if (isPasswordCorrect) {
//     console.log("Login Successful");
// } else {
//     console.log("Incorrect Password");
// }


// =========================================================================
// An online store approves an order if:
//  Payment is successful
// Tasks:
//  Create variable:
// o isPaymentDone
//  Use if / else to:
// o Approve the order
// o Or reject the order

// // Variable to check payment status
// let isPaymentDone = false;

// // If payment is done, approve order
// if (isPaymentDone) {
//     console.log("Order Approved");
// } else {
//     console.log("Order Rejected");
// }

// // =========================================================================
// // A training institute checks student result:
// //  If marks ≥ 50 → Pass
// //  Else → Fail
// // Tasks:
// //  Create variable:
// // o marks
// //  Use if / else to print result.

// // Student marks
// let marks = 65;

// // If marks are 50 or above, pass
// if (marks >= 50) {
//     console.log("Result: Pass");
// } else {
//     console.log("Result: Fail");
// }

// // ===============================================
// // An employee is marked Present if:
// //  They arrived on time
// // Otherwise:
// //  Mark as Late / Absent
// // Tasks:
// //  Create variable:
// // o isOnTime
// //  Use if / else.
// // Employee arrival status

// let isOnTime = true;

// // Check attendance
// if (isOnTime) {
//     console.log("Status: Present");
// } else {
//     console.log("Status: Late / Absent");
// }
// // Sir here late and absent i use in else condition because both are negative status 
// // so i combined them and yet we not study date or time so here i just use boolean value to check attendance

// // =======================================================
// // An e-commerce website gives discount if:
// //  User is a premium member
// // Tasks:
// //  Create variable:
// // o isPremiumUser
// //  Use if / else to show:
// // o “Discount Applied”
// // o Or “No Discount Available”

// // Premium user status that will check 
// let isPremiumUser = false;

// // sir here it will Check discount eligibility if true it will apply discount if not it will show no discount available
// if (isPremiumUser) {
//     console.log("Discount Applied");
// } else {
//     console.log("No Discount Available");
// }


// // =======================================================
// // Employee performance rating system:
// //  Score ≥ 90 → Excellent
// //  Score ≥ 70 → Good
// //  Score ≥ 50 → Average
// //  Else → Poor
// // Tasks:
// //  Create variable:
// // o performanceScore
// //  Use if / else if / else.

// // here is Employee performance score
// let performanceScore = 78;

// // sir Now i apply to Check performance using multiple conditions
// if (performanceScore >= 90) {
//     console.log("Performance: Excellent");
// } 
// else if (performanceScore >= 70) {
//     console.log("Performance: Good");
// } 
// else if (performanceScore >= 50) {
//     console.log("Performance: Average");
// } 
// else {
//     console.log("Performance: Poor");
// }




























