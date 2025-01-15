

// ### **14. Conditional Statements**

// #### Easy:
// 1. Write a program that checks if a number is positive, negative, or zero using `if-else`.
// 2. Use an `if-else` statement to check if a string length is greater than 5.
// 3. Write a program that prints "Even" if a number is even and "Odd" if it is odd.

// #### Medium:
// 1. Create a program that assigns grades based on marks (e.g., A, B, C, D).
// 2. Use nested `if` statements to determine the largest of three numbers.
// 3. Write a program that checks if a year is a leap year.

// #### Hard:
// 1. Implement a program that calculates income tax based on income brackets using multiple `if-else` conditions.
// 2. Write a program to create a simple rock-paper-scissors game using conditional statements.
// 3. Write a program that validates a user's password based on multiple conditions like length, characters, etc.

// let a = 34;
// if (a > 0) {
//   console.log("positive");
// } else if (a < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// let nam = "sidhu";

// if (nam.length >= 5) {
//   console.log("greater then length 5");
// } else {
//   console.log("Not greater then length 5");
// }

// let num = 8;
// if (num % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// let gradde = 86;

// if (gradde < 35) {
//   console.log("grade D");
// } else if (gradde < 60 && gradde > 35) {
//   console.log("grade c");
// } else if (gradde < 95 && gradde > 60) {
//   console.log("grade B");
// } else {
//   console.log("grade A");
// }

// let n1 = 8,
//   n2 = 9,
//   n3 = 10;

// if (n1 > n2 && n1 > n3) {
//   console.log("n1  is greater then other");
// } else if (n2 > n3) {
//   console.log("n2 is greater then other");
// } else {
//   console.log("n3 is greater then other");
// }
// Write a program that checks if a year is a leap year.

// let num = 2004

// if (num % 4 == 0 && num % 100 == 0) {
//     if (num % 400 == 0) {
//         console.log("year is a leap year~~");
//     } else {
//         console.log("It is not a leap year~~");
//     }
// } else {
//     console.log("It is not a leap year~~");
// }
//passsword validator
// let password = "sAidhu6kjlcjlv";
// let lowerCaseLetters = /[a-z]/g;
// let numbers = /[0-9]/g;
// let upperCaseLetters = /[A-Z]/g;
// if (password.length >= 10) {
//     if (upperCaseLetters.test(password)) {
//         if (lowerCaseLetters.test(password)) {
//             if (numbers.test(password)) {
//                 console.log("password is strong!!");
//             } else {
//                 console.log("password is missing numbers !!");
//             }
//         } else {
//             console.log("password is missing lowercase !!");
//         }
//     } else {
//         console.log("password is missing Uppercase!!");
//     }
// } else {
//     console.log("password length is less then 10 !!");
// }


// 1. Write a program to print the first `n` Fibonacci numbers using a loop.

// let first = 0, second = 1
// console.log(first)
// console.log(second)
// let third = 0
// for (let i = 2; i < 10; i++) {
//     third = first + second
//     console.log(`${i}: ${third}`)
//     first = second
//     second = third
// }