// let fn = 12
// let sn = 23
// console.log('====================================');
// console.log(fn > sn);
// console.log('====================================');
// console.log('====================================');
// console.log(fn < sn);
// console.log('====================================');
// console.log('====================================');
// console.log(fn >= sn);
// console.log('====================================');
// console.log('====================================');
// console.log(fn <= sn);
// console.log('====================================');

// console.log('====================================');
// console.log(fn === sn);
// console.log('====================================');
// console.log('====================================');
// console.log(fn == sn);
// console.log('====================================');
// console.log('====================================');
// // console.log(fn !=== sn);
// console.log('====================================');
// console.log('====================================');
// console.log(fn !== sn);
// console.log('====================================');

// const n1 = 12
// const n2 = 1

// if (n1 > n2) {
//     console.log("n1 is greater then the n2...")
// } else if (n1 < n2) {
//     console.log("n2 is greater then the n1...")
// } else {
//     console.log("n2 is equal to n1...")
// }

// const st1 = "sidhu"
// const st2 = "sidhu"
// console.log(st1 === st2)

// const n1 = 9
// const n2 = 4

// const n3 = 2
// if (n1 > n2 && n1 > n3) {
//     console.log(`${n1} is greater ...`)
// } else if (n2 > n3) {
//     console.log(`${n2} is greater ...`)

// } else {
//     console.log(`${n3} is greater ...`)
// }

// const num = 12

// if (num >= 10 && num <= 20) {
//     console.log("yes in range...")
// } else {
//     console.log("not in range...")
// }

// const o1 = 19
// const o2 = 12
// let flag = 0
// if (o1 % 2 != 0 && o2 % 2 != 0) {
//     flag = 1
// } else {
//     flag = 0
// }
// if (flag) {
//     console.log("both are odd...")
// } else {
//     console.log("both are not odd...")
// }
// =====================================================================================================
// 1. Implement a program to sort three numbers in ascending order using comparisons.

// let arr = [4, 2, -1, 3]

// function sort1(arr) {
//     let temp = 0

//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr)

// }
// sort1(arr)

//Objects in comparision
// 2. Write a program that checks if two objects have the same properties and values.(imp)

const obj = {
    name: "shidhu",
    age: 23,
};
const obj2 = {
    name: "shidhu",
    age: 23,
};
console.log(JSON.stringify(obj) === JSON.stringify(obj2));

// 3. Write a function that takes two arrays and checks if they are identical in length and values.

const ar1 = [2, 3, 2, 1, 3];
const ar2 = [2, 3, 2, 1, 3];

function identicalarray(a, b) {
    const samesize = a.length === b.length; // Compare lengths of the two arrays
    let flag = true;

    if (samesize) {
        for (let i = 0; i < a.length; i++) { // Iterate over all elements
            if (a[i] !== b[i]) { // Check if corresponding elements are not equal
                flag = false;
                break;
            }
        }
    } else {
        flag = false; // If sizes are different, the arrays can't be identical
    }

    if (flag) {
        console.log("So both the arrays are exactly the same...");
    } else {
        console.log("Not the same...");
    }
}

identicalarray(ar1, ar2);
