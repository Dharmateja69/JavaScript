// #### Easy:
// 1. Write a program to add an element to the end of an array using `push` and remove an element using `pop`.

let arr = [2, 3, 5];
let n = 19;
arr.push(n); //used to add an element at the end of the array .
console.log(arr);
arr.pop();
console.log(arr);// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// 2. Use `shift` and `unshift` to manipulate the first element of an array.

arr.shift(); //Removes the first element from an array and returns it
console.log(arr);
arr.unshift(9); //inserts new elements at the start of an array, and returns the new length of the array
console.log(arr);

// 3. Use the `concat` method to combine two arrays.
const ar2 = [2, 3, 4, 2];
console.log(arr.concat(ar2));



// #### Medium:
// 1. Write a program to find the index of a specific element in an array using `indexOf`.
let x = 9
console.log(arr.indexOf(5))

// 2. Use the `slice` method to create a subarray from an existing array.
const slicearray = [2, 3, 4, 5, 6, 5, 3, 2, 1]
console.log(slicearray)
console.log(slicearray.slice(0, 2))//the end part is the exclusive start is inlcuded

// 3. Implement a program to sort an array of numbers in ascending order using the `sort` method.
console.log(slicearray.sort())

// #### Hard:
// 1. Write a program to filter out even numbers from an array using the `filter` method.
let newarr = []
slicearray.filter((e) => {
    if (e % 2 == 0) {
        newarr.push(e)
    }
})
console.log(newarr)
// 2. Implement a program that uses `reduce` to calculate the sum of all elements in an array.

slicearray.reduce()
// 3. Use `splice` to remove specific elements from an array and replace them with new ones
