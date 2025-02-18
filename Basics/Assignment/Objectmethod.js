// Object methods are functions that are defined as properties of objects. They allow objects to perform specific tasks and operate on their own properties.


// 1. **Create an object with a method that prints the object’s properties.**

const obj = {
    "name": "sidhu",
    "age": 23,
    print: function () {
        console.log(`Name:${this.name} Age ${this.age}`)
    }
}

obj.print()


// 2. **Write a method in an object that returns the full name of a person.**
const person = {
    "firstname": "dharma",
    "lastname": "teja",
    fullname: function () {
        console.log(`${this.firstname}${this.lastname}`)
    }
}
person.fullname()
// 3. **Use `this` in a method to access the object’s properties.**
const per = {
    "knif": "hfsdfhl",
    greet: function () {
        console.log(`${this.knif}`)
    }
}
per.greet()
// 1. **Write a program to add a method dynamically to an object.**
person.welcome = function () {
    console.log("hi all of you !!")
}
console.log(person)
person.welcome()
// 2. **Create a method in an object that calculates the age of a person based on their birth year.
const cal = {
    "year": 1998,
    Agecall: function () {
        let res = new Date().getFullYear();
        return res - this.year
    }

}
console.log("This is the year:" + cal.Agecall())
// 3. **Implement a program that uses a method to update the value of a property.**
cal.update = function (year) {
    this.year = year
}
cal.update(2345)
console.log(cal)

// 1. **Write a program to create multiple objects with shared methods using prototypes.
function Greet(name, age) {
    this.name = name;
    this.age = age
}

Greet.prototype.well = function () {
    console.log(`Hi man ${this.name}, young man ${this.age}`)
}
const greet1 = new Greet("sidhu", 23)
const greet2 = new Greet("teja", 32)
greet1.well()
greet2.well()
console.log(typeof Greet)
// 2. **Implement a program to bind a method from one object to another object.
const Binding = {
    "name": "super",
    greet: function () {
        console.log("This is name:" + this.name)
    }
}
const pers = {
    "name": "sidhu"
}
const greetAlice = Binding.greet.bind(pers)
greetAlice()
// 3. **Write a program to demonstrate method chaining in an object.
const A = {
    "name": "sidhu",
    "lastname": "teja",
    greet: function () {
        console.log(`this is fullname:${this.name}`)
        return this
    },
    greet1: function () {
        console.log(`${this.lastname}`)
    }
}
A.greet().greet1()