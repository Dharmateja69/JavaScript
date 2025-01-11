// Destructing allows us to "unpack " values from data-structures (arrays, objects) into separate distinct variables.
// 5:30:38

// const foo = ["one", "two", "three"]

// const [A, B, C] = foo

// console.log(A, B, C)


// function f() {
//     return [1, 2]
// }
// let a, b

// [a, b] = f()
// console.log(a)
// console.log(b)

// //how to ignore a funciton returning

// function f() {
//     return [1, 2, 3]
// }
// const [V, , D] = f()
// console.log(V)
// console.log(D)

//Assigning the rest of an array to a varaible
const [e, ...h] = ["one", "two", "three", "true", "12", ["one"]]

console.log(e)
console.log(h)

// In object destructing order doesnt matter but the name does matter

// 5:44:58