// const singer = ['sid', "dsd", "sdf"]
// console.log(singer[0])
// const favnumber = ['sd', 'fsd', 'fsdf', 'sds']
// console.log(favnumber)
// const mixedarr = ["sdfsd", ["fsdfs", "sdsf", "sdfsf"], 123, "true"]
// console.log(mixedarr)
// console.log(mixedarr[1][2])
// easy
const arr = [2, 3, 5, 6, 7];
// console.log(arr)
// let len = arr.length
// console.log(len)
// console.log(arr[0], arr[len - 1])
// #### Medium:
// 1. Write a program to calculate the sum of all elements in an array.
let sum = 0;
arr.forEach((e) => {
    sum += e;
});
console.log(sum);
// 2. Use a loop to find the largest number in an array.
let max = arr[0];
arr.forEach((e) => {
    if (max < e) {
        max = e;
    }
});
console.log(max);
// 3. Write a program to reverse an array.
arr.reverse();
console.log(arr);

// #### Hard:
// 1. Implement a program to remove duplicates from an array.
const ar = [2, 3, 5, 6, 3, 4, 4, 4, 7];

let newarr = [];
for (let i = 0; i < ar.length; i++) {
    if (!newarr.includes(ar[i])) {
        newarr.push(ar[i]);
    }
}
console.log(newarr);

// 2. Write a program to find the intersection of two arrays.
const ar1 = [2, 3, 5, 6, 4, 7];
const ar2 = [10, 4, 5, 6, 3];
let comoon = [];
for (let i = 0; i < ar1.length; i++) {
    for (let j = 0; j < ar2.length; j++) {
        if (ar1[i] == ar2[j]) {
            comoon.push(ar1[i]);
            break;
        }
    }
}
console.log(comoon);

// 3. Create a program to rotate an array by a given number of steps.

const num = 2;
const number = [2, 3, 4, 5, 6, 7];
let n = number.length
let temp = 0;
for (let j = 0; j < num; j++) {
    let first = number[0];
    for (let i = 0; i < number.length - 1; i++) {
        number[i] = number[i + 1];
    }
    number[n - 1] = first
}
console.log(number)
