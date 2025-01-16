// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object , but with a few key difference.

// -> Keys can be of any data type: Unlike objects , where keys are limited to string and symbols , Map allows you  to use any data type as keys , including numbers  , booleans , objects , and even other map instancse.

//-> Maintains insertions order: Map preserves the order of key-value pairs as they were inserted , while objects keys may not be guaranteed to be in a specific order.
// ->Iteration: Map provides buit-in methods for easy iteration over its elements.


// const map = new Map()

// const keyOne = "string"
// const keyTwo = {}
// const keyThree = function () { }

// map.set(keyOne, "value of key one")
// map.set(keyTwo, "value of key two")

// map.set(keyThree, "value of key three")
// console.log(map.keys())
// console.log(map.values())
// console.log(map.size)
// // console.log(map.delete(keyOne))
// // console.log(map)

// for (let [key, value] of map) {
//     console.log(`${key}--${value}`)
// }
// for (let key of map.keys()) {
//     console.log(`${key}`)
// }
// //vice versa for value


const map = new Map()
const ab = "a"
const bc = "b"

const cd = "c"

map.set(ab, "1")
map.set(bc, "2")
map.set(cd, "3")
console.log(map.get("a"))
console.log(map.keys())
console.log(map.size)
console.log(map.delete(bc))
console.log(map.size)

