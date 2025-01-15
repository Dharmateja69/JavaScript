// ==========================================
// write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.
// write the calcualteProduct function using the reduce() method to achieve this task.
// something like this
// const numbers [2,3,4,5]

// const product = calculateProduct(numbers)
// console.log(product)//120
// =========================================

const numbers = [2, 3, 4, 5];
const product = numbers.reduce((p, c) => {
    return p * c;
}, 1);

console.log(product);
