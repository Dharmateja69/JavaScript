// Prototypal inheritance is a mechanism in JavaScript that allows objects
// to inherit properties and methods from other objects. It is a fundamental
// concept in the language and is based on the prototype model. In prototypal
// inheritance, objects can serve as prototypes for other objects, forming a
// hierarchical chain of inheritance.


//  In JavaScript, every object has an internal property called
// [[Prototype]] (often referred to as _ proto_), which points to its
// prototype object. When you access a property or method on an object, and
// that property or method is not found in the object itself, JavaScript Looks
// for it in the object's prototype (and further up the prototype chain, if
// needed) until it finds the property or reaches the top of the prototype
// chain, which is usually the Object prototype.



function Animal(name) {
    this.name = name
}
Animal.prototype.sound = function () {
    return "Animal Sound"
}

function Dog(name, breed) {
    Animal.call(this, name)
    this.breed = breed
}
// The object.create() method creates a new object a new object , using an exixting object as the prototype of the newly created objects.
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = function () {
    return `Hello iam the only person!!`
}

const dog1 = new Dog("buddy ", "Genus")
console.log(dog1.name)
console.log(dog1.sound())
console.log(dog1.bark())

