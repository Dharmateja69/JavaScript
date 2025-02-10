

// function showcallfunc(fn) {//here fn is the call back function

//     const value = 10
//     fn(value)//dd


// }
// //call back function 
// function fn(value) {
//     console.log(`this the value is ${value}`)
// }

// showcallfunc(fn)

// A callback function is a function passed into another function as an argument to be executed later. Callback functions are often used for handling asynchronous tasks or customizing behavior.

// *Write a function that takes a callback and a number, then executes the callback with the number.
function mul(n) {
    console.log(n * 45)
} function processingnumber(value, callback) {
    callback(value)
}
processingnumber(5, mul)
// 2. **Create a program where a callback prints "Processing..." after a delay.**
function set() {
    setTimeout(() => {
        console.log("Processing....")
    }, 3000);
}

function callback(delay) {
    delay()
}

callback(set)
// 3. **Write a function that accepts a callback to calculate the square of a number.**
function square(n) {
    console.log(n * n)
}
function operation(n, solve) {
    solve(n)
}
operation(6, square)
// 1. **Write a function that performs basic arithmetic operations using a callback.**
function arithmetic(n, m, oper) {
    oper(n, m)
}

function add(n, m) {
    console.log(m + n)
}
arithmetic(3, 4, add)
// 2. **Implement a program that processes an array using a callback function.**
const num = [2, 3, 4, 5, 6]
function array(num, call) {
    call(num)
}
function called(num) {
    console.log(num * 9)
}
array(4, called)
// 3. **Use a callback to simulate fetching user data and printing it after a delay.**
const data = {
    "name": "sidhu",
    "age": 23
}
function fetch(data, call) {
    call(data)
}

function fetchdata(data)//here the call method data properties is used .
{
    setTimeout(() => {
        console.log(data.name, data.age)
    }, 2000)

}
fetch(data, fetchdata)

// 1. **Write a program that chains multiple callbacks to perform a series of tasks (e.g., read a file, process data, save the result).**

function readfile(callback) {
    console.log("Read a file");
    callback();
}

function process(callback) {
    console.log("Process data");
    callback();
}

function save() {
    console.log("Save the result and finish..");
}

function chain(call) {
    call();
}

// Pass the function reference, not the result of execution
chain(() => {
    readfile(() => {
        process(() => {
            save();
        });
    });
});

// 2. **Implement a program that uses nested callbacks to simulate multiple asynchronous operations.**

// 3. **Create a custom forEach function using callbacks.**
function Coustomefordata(arr, call) {
    for (let i = 0; i < arr.length; i++) {
        call(arr[i], i, arr)

    }
}
Coustomefordata([2, 3, 4, 54], (elem, i) => {
    console.log(`index: ${i} Element:${elem} `)
})




