// ************ DOM SELECTORS ************
// 1. getElementsByTagName
//document is the main object
console.log(document.getElementsByTagName("h1"))
// 2. getElementById
console.log(document.getElementById("main"))
// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"))
// 4. querySelector
console.log(document.querySelector(".cls"))//here even we have more h2 tags with classname = cls it will select only first one. to overcome this we use querySelectorAll()

console.log(document.querySelector("#main"))//this is the syntax for id selector 

// 5. querySelectorAll
console.log(document.querySelectorAll(".cls").length)

// ---------------------------------------
// Storing data in variables

const all = document.querySelectorAll(".cls")
console.log(all)