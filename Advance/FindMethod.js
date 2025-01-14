// The find() method is  another built-in array helper in javascript that allows you to find the first element in an array that matches a specific condition. it returns the value of the first element that satisfies the given testing function, or undefined if no element is found.

const person = [
    { name: "luckyyou", duration: 4.32 },
    { name: "just you", duration: 4.0 },
    { name: "lucasasky you", duration: 4.2 },
    { name: "lucdsdky you", duration: 4.42 },
]

// function namefunction(names) {
//     return names.name === "luck you"
// }

// const res = person.find((key) => key.name == "luckyyou")
// console.log(res)
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
// Returns the value of the first element in the array where predicate is true, and undefined otherwise.


const posts = [
    { id: 1, content: "Good Post" },
    { id: 2, content: "Funny Post" },
    { id: 3, content: "Sad Post" },

]

// const res = posts.find(key => key.content === "Funny Post")
// console.log(res)
// Assignment

//  Iterate over "ages" array
// print only those ages which is greater then 18

const ages = [3, 10, 18, 32, 20]

function check(key) {
    return key > 18
}

console.log(ages.find(check))