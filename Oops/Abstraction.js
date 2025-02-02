// Abstraction is the process of simplifying complex systems by breaking them down into smaller managed parts.
// It allows you to focus on the essential
// features of an object and hide unnecessary details. In JavaScript, you can
// use abstract classes to define abstract structures and then implement them
// in concrete objects.
// Abstract class(providing a blueprint for subclass)


class Animal {

    constructor(name) {
        this.name = name;
    }

    // Abstract method (to be implemented by subclass)
    makesoound() {
        throw new Error("Method (makesound) must be implemented...")
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    makesoound() {
        return "bhoww!!"
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    makesoound() {
        return "Moew!!"
    }
}

const Dogs = new Dog("Buddy")
console.log(Dogs.name)
console.log(Dogs.makesoound())

// ================================================================
// Define
// In this example, we have an abstract class Animal that contains an abstract method
// mokeSound(). The makeSuund() method is declared in the Animal class but doesn 't provide an
// implementation. It's meant to be implemented by subclasses tike Dog and Cat.
// // The Dog and Cat classes ore concrete subclasses that inherit from the Animal Class. They
// implement the abstract method makeSound() with their own specific implementations for making
// sounds.

// By using abstraction ,we define a common interface (makesound()) that each subclass must implement, while hiding , the internal details of how animal makes its sound . This simplifies the code and allows us to work with animals at a higher level of abstraction, without worrying about the specifics of each ani,als sound implementation.