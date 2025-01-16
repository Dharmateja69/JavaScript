// Set is a built-in data structure intoduced in (ES6) that represents a collection of unique values. Unlike arrays, Set allows you to store only unique values , which means duplicate values are automatically removed . Each value can occur only once within a set
// Set objects are useful when you need to store a list of unique element and quickly check for he existence of a specific value. 

// const init = [1, 2, 3, 4, 4, 4]

// const set = new Set(init)
// set.add("apple")
// set.add("banana")

// set.add("orange")
// set.add("fruit")
// console.log(set.delete("orange"))//It will return true or false
// console.log(set.has("apple"))//If exist it gives true else false
// console.log(set)//Set(4) {1, 2, 3, 4}

// for (let item of set) {
//     console.log(item)
// }
//Assignment
const value = ["a", "b", "c"]
const letters = new Set(value)
letters.forEach(key => { console.log(`${key}`) })