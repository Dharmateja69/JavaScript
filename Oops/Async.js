// Async is a special function that is designed to
// operate asynchronously, meaning that it can
// perform tasks in the background while other
// code continues to execute. Async functions
// are marked with the async keyword.

// Async
// Async is a keyword use to turn
// function declaration to async
// function.

// await
// The await operator is used to wait for
// a Promise. It can only be used inside
// an async function within regular
// JavaScript code.

// function fetDataFrameServer() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User data retrived from the server .")
//         }, 4000)

//     })
// }

// async function getuserData() {
//     try {
//         const data = await fetDataFrameServer()
//         console.log(data)
//         console.log("remaining task can be executed here .")

//     } catch (error) {
//         console.log(error)
//     }
// }
// getuserData()


