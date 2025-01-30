// //This key word
// in a method: this refers to the owner object
// Alone : this refers to the global object
// In a function : this refers to the global object.

// console.log(window)
// console.log(this)
// console.log(this === window) true

// window.firstname = "sidhu"//here we are creating a new variable
// console.log(window)

// ========================================//
// function printhis() {
//     return this;
// }
// const res = printhis()
// console.log(res)

// if only this is reserved kyword is called then it will return window object
//////////////////////////////////////////////////////
// const obj = {
//     fristname: "huxn",
//     lastname: "webDev",
//     fullname: function () {
//         return `${this.fristname} and ${this.lastname}`;// in this case it will return the owner obj only
//     }
// }
// const res = obj.fullname()
// console.log(res)

// const obj = {
//     fristname: "huxn",
//     lastname: "webDev",
//     fullname: () => {
//         return this;// if we are creating an arrow function then it will be refering to the window obj instead owner obj.
//     }
// }
// const res = obj.fullname()
// console.log(res)

// ==============================================================
