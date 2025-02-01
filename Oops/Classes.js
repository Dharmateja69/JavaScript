//Classess are one of the features introduced in the EsS6 version of javaScript.
//  A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of  a house . It contains all the details about the floors, doors , windows, etc. Based on these descriptions, you build the house.

//Since many houses can be made frome the same description, we can create many objects from a class

// Class Declaration

// class Person {
//     constructor(firstname, lastname, age) {
//         //instance members
//         this.firstname = firstname
//         this.lastname = lastname
//         this.age = age
//         this.print = function () {
//             return ` Name : ${firstname}${lastname} and age is ${age}`
//         }
//     }
//     // Prototype Members
//     greet() {
//         return `Hello iam ${this.firstname}`

//     }

// }
// //Allows us to borrow the property of the person to programmer 
// class Programmer extends Person {
//     constructor(firstname, lastname, age, pl, experience) {
//         super(firstname, lastname, age)
//         this.pl = pl
//         this.experience = experience
//     }
// }
// // const jhon = new Person("sidhu", "sid", 32)
// // console.log(jhon)
// // console.log(jhon.print())
// // console.log(jhon.greet())
// const jhon = new Programmer("sidhu", "sid", 34, "java", 34)
// console.log(jhon)

// =============================================================================

// class Hero {
//     constructor(name, level) {
//         this.name = name
//         this.level = level
//     }
//     greet() {
//         return `hi ur welcome!!`
//     }
// }
// class Mega extends Hero {
//     constructor(name, level, spell) {
//         super(name, level)
//         this.spell = spell
//     }
//     greet() {
//         return `hi ur welcome!!`
//     }
// }

// const jhon = new Mega("sidhu", "level 3", "english")
// console.log(jhon)
// =============================================================================