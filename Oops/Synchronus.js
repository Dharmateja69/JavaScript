// Synchronous JavaScript refers to the traditional way Of executing
// JavaScript code, where each operation is performed in a sequential
// and blocking manner. In other words, each line of code is executed
// one after the other and the program Will wait for each operation to
// finish before moving on to the next one. If an operation takes a long
// time to complete, it can potentially slow down the entire
// application, making it less responsive.

// Asynchronous
// Asynchronous JavaScript allows certain operations to be executed
// independent from the main program flow, so they don't block the
// execution of other tasks. This is typically achieved using techniques
// like callbacks, promises, and async/await, which allow developers
// to handle asynchronous operations more efficiently.

// Synchronous
// function add(a, b) {
//     return a + b;
// }

// function multily(b, c) {
//     return b * c
// }

// const res1 = add(3, 4)
// const res3 = multily(res1, 4)
// console.log(res3)

// Asynchronous Code

// console.log('start')//first excuted
// setTimeout(() => {
//     console.log('Inside Settimeout')//last executed
// }, 2000)

// console.log("end")//second executed


// Callback hell

// function callbackhell(callback) {
//     setTimeout(() => {
//         const data = "Inside callback hell ";
//         console.log(data);
//         callback(data);
//     }, 2000);
// }

// function first(data, callback) {
//     setTimeout(() => {
//         const processData = `${data}-Processed First `;
//         console.log("Inside (first name) Function");
//         callback(processData);
//     }, 1000);
// }

// function secondfun(data, callback) {
//     setTimeout(() => {
//         const processData = `${data}-Processed Second`;
//         console.log("Inside second callback");
//         callback(processData);
//     }, 1500);
// }

// // Callback hell (Nested Callbacks)
// callbackhell((data) => {
//     first(data, (processData1) => {
//         secondfun(processData1, (processData2) => {
//             console.log(`Final result of all functions: ${processData2}`);
//         });
//     });
// });

// Callback is not always asynchronous sometime it can be synchronous...
// console.log("start...")
// const number = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10]
// number.forEach(n => {
//     console.log(n)
// })
// console.log("end")
