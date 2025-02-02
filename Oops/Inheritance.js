// Inheritance allows a Class (subclass) to inherit properties and methods from
// another class (superclass). This enables code reuse and the creation of
// hierarchical relationships between classes. In JavaScript, inheritance can be
// achieved through prototype-based inheritance (before ES6) or using ES6
// classes (with the extends keyword).


// ES6 code
//Superclasss

class Animal {
    constructor(name) {
        this.name = name
    }
    makesound() {
        return "Unknown Sound!"
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    makesound() {
        return "Bhow!!"
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    makesound() {
        return "Meoww..!!"
    }
}

const gen = new Dog("Dog")
console.log(gen)
console.log(gen.makesound())

