// Every javascript object has a anonymous property called prototype
// Remember functions & arrays are also an objects
// that prototype will be the parent of that object, prototype property is
// object by itself, which have some special properties & methods



// Every object is associated with another object.
// The object (obj) is associated with [[Prototype]] Object
// which means obj object will inherit all properties of
// Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways:
// —> obj._proto_
// —> obj.constructor. prototype
// —> Object.getPrototype0f(obj)

const obj = {}
console.log(obj)
//when ever we creat a object two things happens one creation of object other is creation of prototype which wil  be hidden  and which contians multiple number of methods.
console.log(obj.__proto__)
console.log(Object.getPrototypeOf(obj))

// String.prototype.hello = function () {// own made fucnction.
//     console.log(this)
//     console.log(this.toUpperCase())
// }
// console.log("hellow and welcome ".hello())





