// The object.create() method creates a new object, using an existing object a the prototype of the newly created object.

let person = {
    greet: function () {
        console.log(`Hello  my name is ${this.firstname}, ${this.lastname}`)
    }
}
const sohu = Object.create(person)
sohu.firstname = "sidhu"
sohu.lastname = "webdev"
sohu.greet()
sohu.firstname = "sid"
sohu.lastname = "sdf"
sohu.greet()