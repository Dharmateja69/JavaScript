// The spread operators is a new addition to the set of operators in javascript ES6 
// It takes in an iterable(e.g an array ) and expands it into individual elements.
//  The spread operators is commonly used to make shallow copies of js objects.
//  Using this operators makes the code concise and enhances its readability.
// 5:12:37

function giveMe4(a, b, c, d) {
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)

}

const colors = ["red", "green", "blue", "teal"]

giveMe4(colors)  // now we assign the array to a (4) ['red', 'green', 'blue', 'teal']0: "red"1: "green"2: "blue"3: "teal" ,b,c,d

giveMe4(...colors) // it is spreadOperator


const arr = ["one", "two", "three"]
const arr1 = ["sdfs", "sdf", "sdfsd"]
const concat = [...arr, ...arr1]
console.log(concat)

let people = ['huxn', "sidhu", "dev"]
const allpeps = ["kumaxi", ...people, 'jonhn']
console.log(allpeps)
// const allpeps = ["kumaxi", people, 'jonhn'] it will give thwe nested array 

//spread example using object

const obj1 = { x: 1, y: 2 }
const obj2 = { r: 3, l: 4 }
const obje3 = { ...obj1, ...obj2 }
console.log(obje3)
// const obje3 = { obj1, obj2 }

let person = {
    name: "sidhu",
    age: 12,
    gender: "male",
}
const clone = { ...person }
console.log(clone)
const clone1 = { ...person, work: "student", program: "coding" }
console.log(clone1)



