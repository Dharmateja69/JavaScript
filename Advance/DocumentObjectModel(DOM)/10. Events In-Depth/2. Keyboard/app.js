// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

// input.addEventListener("keypress", () => {
//     console.log("key press!!")
// })

// input.addEventListener("keyup", () => {
//     console.log("keyup!!")
// })//vice versa keydown


//usefull property and method.
input.addEventListener("keyup", e => {
    // const assci = input.value
    // console.log(assci)
    // console.log(e.code)//which will give the specifc key name
    // some other methods like --> e.ctrlKey,e.key,e.shiftKey
})