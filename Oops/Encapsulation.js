// Encapsulation is the concept Of bundling data (properties) and methods
// (functions) together within an object, allowing the object to control access
// to its internal data and behavior. This helps to hide implementation details
// and expose only necessary interfaces to interact with the object. In
// JavaScript, you can achieve encapsulation by using closures, symbols, or
// naming conventions to simulate private members and expose public
// interfaces.

// In JavaScript, we can achieve encapsulation by using closures to create private members.

function Encapsulation() {
    let count = 0;//Privatte variable
    //PUblic method that can access and modify the private variable

    this.increment = function () {
        count++
    }
    this.decrement = function () {
        count--
    }
    this.getCount = function () {
        return count
    }

}

const counter = new Encapsulation()
console.log(counter.getCount())
counter.increment()

counter.increment()
counter.increment()
console.log(counter.getCount())



