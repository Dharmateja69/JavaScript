//Class modifiers, also known as acess modifiers or visibility modifiers , are keywords in oop languages that define the visibility or accessibility of class members (fields, methods,and nested classess) from other parts of the program. They control the level of encapsulation and help enforce encapusalation principles by restricting direct access to certain class members.


//In javaScript, class modifiers are used in the context of clasess and objects, although javascript does not have traditional access modifiers like some other object-oriented languges , However, you can achieve similar effects using different conventions and techniques.

// Encapsulation, Abstraction,Inheritance,Polymorphism...

// private->
// public->
// protected->

function Myclass(publicfield, privatefield, protectedfield) {
    // Public Field
    this.publicfield = publicfield

    // Private  Field(closure)
    const _privateField = privatefield

    // protected field
    const _protectedfield = protectedfield
    // Public method
    this.publicfield = function () {
        return `Public field:${this.publicfield}`
    }
    // privavte method(closure)
    function _privatemethod() {
        return `Private method: ${_privateField}`
    }
    // protected method
    function protectedmethod() {
        return `Protected Mthod: ${_protectedfield}`
    }

    // mthod to access protected method
    this.accessProtectedMthod = function () {
        return protectedmethod()
    }
}

const myobject = new Myclass("public data", "Private Data", "Protected Data")
console.log(myobject.publicfield)
console.log(myobject._privateField)
console.log(myobject._protectedfield)
console.log(myobject._privatemethod())
console.log(myobject._protectedfield())


