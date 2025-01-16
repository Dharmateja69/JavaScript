// Symbols is a unique and immutable primitve data type introduced in ECMAScript 6 (ES6). A symbol is often used as an identifier for object properties to avoid potential naming confilts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you create a symbol, it is unique and cannot be recreated or changed. This uniqueness ensures that symbols will not collide with other property names, Even if they have the sasme string representation .


// const mysymbol = Symbol("My custome Symbol")
// console.log(mysymbol)
// // comparing the symbols

// const symb1 = Symbol("name")
// const symb2 = Symbol("name")
// console.log(symb1 === symb2)//false because Symbols are unique in nature .


// const sym1 = Symbol("name")
// const sym2 = Symbol("name")

// const sidhu = {}
// sidhu.age = 12
// sidhu["gender"] = "male"
// sidhu["gender"] = "female"
// sidhu[sym1] = "jhoe"
// sidhu[sym2] = "shy"
// console.log(sidhu)


// Assignment

const fool = Symbol("foo")
console.log(typeof fool)
const sidhu = {}
sidhu[fool] = "sidhu"
console.log(sidhu)

