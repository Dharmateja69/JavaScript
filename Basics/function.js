// A function is a block of code that performance a specific task
// Function makes the code reusable . You can declare it and use it mulitple times.
// Function makes the Program easier as each small task is divided into a function
// function increses readability
// DRY - Dont Repeat Yourself
//  function name(parameterifAny){....}

// function freet() {
//     console.log('hello im sidhu!!')
// }

// freet()
// // call, run, execute

// function sayhello(name) {
//     // console.log(`hello ${name = "sid"}`)
//     console.log(`hello ${name}`)

// }
// sayhello("sidhu")
// return keyword in function 
// function add(x, y) {
//     return x + y
// }
// console.log(add(20, 32))

// Function Declaration
// function sayhello(username) {
//     console.log(`hello ${username}`)
// }
// sayhello("sidhuewe")
// console.log(sayhello)

// function expression

// const funcationvar = function (user)// now we store the function in the variable now the variable will act as a function
// {
//     console.log(`heloow ${user}`)
// }

// funcationvar("sid");

// call back function in java
// when we provide function as an (argument) to other function that function is known as callback  function

function showcallfun(fn) {
    const value = 10;
    fn(value)// this function is called call bak function

}
showcallfun(function (value) {

    console.log(value)
})

function greet(name, cb) {
    console.log(`hello ${name}`)
    cb()
}
//declared outside
function cb() {
    console.log(`i am callback function`)
}
greet("sidhu", cb)

// else we can do
greet("sidhu", function cb() {
    console.log(`i am callback function`)
})
// both the above processs is valid


