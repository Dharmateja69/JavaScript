// A promise is an object representing the eventual completion or failure of an asynchronous operation.

// new Promise(): A JavaScript Promise object contains both the producing code and calls to the consuming code . It can be used to deal with Asynchroous operation in javaScript.

// 3 state->pending, Fuifilled/Resolved , Rejected...

// pending-> inital state,Not yet Fulfilled or rejected
// fulfilled/Resolved -> Promise Completed
// Rejected->Promise Failed.

// promise->resolved->.then(),.finally()
//  |
//  Rejected ->.then(),.catch(),.finally() 
// Syntax-> new Promise((resolve,reject)=>{ })

// Syntax-> new Promise((resolve,reject)=>{
// Async Operartions
// resolve(value)
// reject(Error)
// })

// .then()-> .then() is a method used to handle the
// successful outcome of a Promise in JavaScript.
// It takes 2 arguments: (onFulfilled, onRejected)
// The catch() method returns a Promise & rejected case only.

// const ppromiseObj = new Promise((resolve, reject) => {
//     let req = false
//     req == true ? resolve("Request Successful") : reject("Request Rejected")
// }).then((value) => console.log(value))
//     .catch((error) => console.log(error))
// use key word npm

function checknumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(`${number} is an even number.`)
        } else {
            reject(`${number} is an odd number.`)

        }
    })

}

const numerTocheck = 7//

checknumber(numerTocheck).then((message) => {
    console.log(`Success :${message}`)

}).catch((error) => {
    console.log(`${error}`)
})

