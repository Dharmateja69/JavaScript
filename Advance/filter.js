// The filter() method is a built-in array method in javascript that allows you to create a new array conatining elements that pass a certain condition . It provides a clean and concise way to filter out elements form an array based on a specified criteria.

// const songs = [
//     { name: "lucky you", duration: 4.32 },
//     { name: "just you", duration: 4.0 },
//     { name: "lucasasky you", duration: 4.2 },
//     { name: "lucdsdky you", duration: 4.42 },

// ]
// console.log(typeof songs)

// console.log(songs.filter((song) => song.duration > 4.2))
// A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
// Returns the elements of an array that meet the condition specified in a callback function.

// Assignment

// iterate over "ages " array
// print only adults, those whose age is greater then 18

// const ages = [32, 33, 16, 40]

// function key(age) {
//     return age > 18
// }
// console.log(ages.filter(key))

// 2 assignment
// iterate over "words" array
//  print only those words which length is greater then 6

const words = [
    "spray",
    "spray",
    "spray",
    "exuberant",
    "destruction",
    "present"
]

function lengtofwords(word) {
    return word === 'spray'
}
const result = console.log(words.filter(lengtofwords))//filter accepts one call back function in this case the callback function is lengthofwords function.
console.log(result)
