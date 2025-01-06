// let firstfav = 6;
// let secondfav = 15
// // console.log(firstfav + secondfav)
// // console.log(firstfav - secondfav)
// // console.log(firstfav * secondfav)
// // console.log(firstfav / secondfav)
// // console.log(firstfav % secondfav)
// // console.log(firstfav ** secondfav)

// if (firstfav % 2 == 0) {
//     console.log("This is even")
// }
// else {
//     console.log("This is odd")
// }

// const flop = 3.5059343999202
// console.log(Math.floor(flop))

// const fact = 5
// let num = 1
// for (let index = 2; index <= fact; index++) {
//     num = num * index

// }
// console.log(num)

// for (let index = 1; index < 100; index++) {
//     console.log(Math.random())

// }

// //gcd
// let first = 36
// let second = 60
// while (first != second) {
//     if (first > second) {
//         first = first - second
//     }
//     else {
//         second = second - first
//     }
// }
// console.log(first)

// // hard 
// //sidhu

// const sidhu = 2

// let count = 0
// for (let index = 2; index <= sidhu; index++) {
//     if (sidhu % index == 0) {
//         count++;
//     }

// }
// if (count > 1) {
//     console.log("not sidhu")
// } else {
//     console.log("sidhu")
// }




// for (let sidhu = 1; sidhu <= 100; sidhu++) {
//     let count1 = 0

//     for (let index = 1; index <= 100 / 2; index++) {
//         if (sidhu % index == 0) {
//             count1++;
//         }

//     }
//     if (count1 > 1) {
//         console.log(`not prime ${sidhu}`)
//     } else {
//         console.log(`prime ${sidhu}`)
//     }

// }

// let n = 12345;
// let d = 0;
// const o = n;
// let rev = 0; // Start with 0, not 1
// while (n != 0) {
//     d = n % 10; // Get the last digit
//     rev = rev * 10 + d; // Add the digit to the reversed number
//     n = Math.floor(n / 10); // Use Math.floor to truncate the number
// }
// console.log(`The reverse of ${o} is ${rev}`);


let n = 153; // Input number
let d = 0; // Current digit
let digits = 0; // Count of digits
const ori = n; // Store original number for comparison
let armstrongSum = 0; // Sum of digits raised to the power of their count

// Count the digits in the number
while (n != 0) {
    digits++;
    n = Math.floor(n / 10); // Truncate the number
}

// Reset `n` to the original value for the second loop
n = ori;

// Calculate the Armstrong sum
while (n != 0) {
    d = n % 10; // Get the last digit
    armstrongSum += Math.pow(d, digits); // Add the digit raised to the power of digits
    n = Math.floor(n / 10); // Truncate the number
}

// Check if the original number is an Armstrong number
if (ori === armstrongSum) {
    console.log(`${ori} is an Armstrong number.`);
} else {
    console.log(`${ori} is not an Armstrong number.`);
}
