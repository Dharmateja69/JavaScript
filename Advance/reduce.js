// The reduce() method applies the reducer function to each element of an array, accumulating the results into a single value. It is often used to perform calculations or aggregations on array elements and simplify the array into a single value.

// const numbers = [1, 2, 3, 4, 5]

// const sum = numbers.reduce((p, c) => {

//     console.log(`Previous: ${p}`)
//     console.log(`Current:${c}`)
//     return p + c
//     // 0+1=1
//     // 1+2=3
//     // 3+3=6
//     // 6+4=10
//     // 10+5=15
// }, 0)//this 0 is given to the p=0

// console.log(sum)
//             Previous: 0  0 came from intilized value.
// reduce.js:8 Current:1
// reduce.js:7 Previous: 1
// reduce.js:8 Current:2
// reduce.js:7 Previous: 3
// reduce.js:8 Current:3
// reduce.js:7 Previous: 6
// reduce.js:8 Current:4
// reduce.js:7 Previous: 10
// reduce.js:8 Current:5
// reduce.js:17 15

// const peo = [
//     {
//         name: "sudf",
//         age: 34,
//     },
//     {
//         name: "ssdasdudf",
//         age: 38,
//     },
//     {
//         name: "sudfsddda",
//         age: 30,
//     },
// ];

// const oldestage = peo.reduce((p, c) => (c.age > p ? c.age : p), 0)
// console.log(oldestage)

const words = [
    "apple",
    "bannana",
    "orange",
    "bannana",
    "apple",
    "orange",
    "apple",
    "grape"
]

const wordfrequency = words.reduce((frequencyMap, word) => {
    frequencyMap[word] = (frequencyMap[word] || 0 + 1)
    return frequencyMap

}, [])
console.log(wordfrequency)
