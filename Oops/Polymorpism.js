// Polymorphism allows Objects to be treated as instances Of their parent
// class, even if they are instances of a subclass. This facilitates writing code
//that works with differnt types of object in a generic way. In JavaScript,
// polymorphism is achieved through method overriding, where a subclass
// provides its own implementation otf a method tha is already defined in the
// parent class. The code can then use the same method to work with both
// parent and subclass instances.


// In javaScript polymorphism achieved through method overriding , where a subclass provides its own implementation of a method that is already defined in the parent class.

class Animal {
    constructor(name) {
        this.name = name;
    }
    makesound() {
        return "Unknown sound...";
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    // overriding method
    makesound() {
        return "Bhoww!!"
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    // overriding method
    makesound() {
        return "Meoww..!!"
    }
}
function animalInfo(animal) {
    console.log(`Name:${animal.name}`)
    console.log(`Name:${animal.makesound()}`)
}
const gen = new Animal("genric ")
animalInfo(gen)
const dog = new Dog("Buddy ")
animalInfo(dog)

