//ES5 code convert it to ES6
// var lib = {
//     sum: function (a, b) {
//         return a + b;
//     },
//     mult: function (a, b) {
//         return a * b;
//     },
// };

// console.log(lib.sum(2, 3))
// console.log(lib.mult(3, 2))

const lib = {

    sum: (a, b) => a + b,
    mult: (a, b) => a * b
}
console.log(lib.sum(3, 2))
console.log(lib.mult(8, 7))