// Scope in javascrit refers to the current context of code , which determines the accessablity of variables to javascript
//   There are two types of scopes in javascript
// Global Scope variables are those declared outside of a block

// let textmessage = "hi"; //global
// console.log(textmessage); //hi

// console.log(textmessage); //hi

// //  Local Scope variables are those declared inside of a block

// function showmessage() {
//     let textmessage = "hello"; //this var is only accessable inside the block only //it is  the local variable
//     console.log(textmessage);
// }
// showmessage();


// for (let i = 0; i < 5; i++) {
//     console.log(i)// i is the local variable 
// }
// console.log(i)// now we want to access it globaly which is not possiable


// methods in javasript(2 ways)
// ======================================================================
function greet() {
    return `hello , my name is ${person.name} & i am ${person.age} years old.`
}
const person = {
    name: "jhon",
    age: 80,
    greet,
}
console.log(person.greet())
// ======================================================================
const person1 = {
    name: "jhon",
    age: 80,
    greet: function () {
        return `hello , my name is ${person.name} & i am ${person.age} years old.`
    },
}
console.log(person.greet())
// =======================================================================