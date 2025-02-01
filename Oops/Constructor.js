//// Constructor functions in JavaScript are regular functions
// used with the new keyword to create and initialize objects
// with shared properties and methods. They act as blueprints
// for creating muttipte instances of objects with the same
// structure and behavior.


// function Createpeople(firstname, lastname, pl) {
//     this.firstname = firstname
//     this.lastname = lastname
//     this.pl = pl
//     this.info = function () {
//         return `hello my name is ${firstname} and i love ${pl}`
//     }

// }

// // NEW KEYWORD:
// // 1. First create empty object {}
// // 2. Sets "this" to point to that object
// // 3. We can omit the return statement using "new" keyword

// const jhon = new Createpeople("sidhu", "sidh", "javascript")
// console.log(jhon)
// console.log(jhon.info())

// ===================================================================================

// function Person(name, age, gender) { every constructor has a starting with capital letter
//     this.name = name
//     this.age = age
//     this.gender = gender
//     this.info = function () {
//         return `my name is ${name} ,and age is ${age} and im ${gender}`
//     }
// }

// const res1 = new Person("sidhu", 23, "male")
// console.log(res1)
// console.log(res1.info())
// const res2 = new Person("sid", 34, "male")
// console.log(res2)
// console.log(res2.info())
// ===========================================================================================

// function Car(make, model, year, color) {
//     this.make = make
//     this.model = model
//     this.year = year
//     this.color = color
//     this.start = function () {
//         return `Starting the ${make} ${model}....`
//     }
//     this.stop = function () {
//         return `Hwllo Stoppig the ${make} ${model}`
//     }
// }

// const car1 = new Car("tata", "cvre", 2003, "red")
// console.log(car1)
// console.log(car1.start())
// console.log(car1.stop())
// const car2 = new Car("toyota", "cre", 2004, "blur")
// console.log(car2)
// console.log(car2.start())
// console.log(car2.stop())
// ===========================================================================


// Built-in constructors, also known as native constructors, are standard
// constructors provided by JavaScript that allow you to create objects of
// various data types. These constructors are available globally and do not
// need to be explicitly defined. They provide a convenient way to create
// instances of primitive data types and built-in objects.

const num1 = new Number(10)
console.log(num1)
const str = new String("sidu")
console.log(str)
const bool = new Boolean(false)
console.log(bool)
const rray = new Array(1, 2, 3, 4)
console.log(rray)






