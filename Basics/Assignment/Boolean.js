// let isJSProgrammingLanguage = true
// let isJsHard = false
// let favNumb = 23
// const fave = console.log(favNumb + undefined)
// const fav1 = console.log(isJsHard)

// const fav2 = console.log(isJSProgrammingLanguage)
// console.table({ isJSProgrammingLanguage, isJsHard, favNumb })


// let abc = true
// if (abc === true) {
//     console.log("yes it is true")
// }
// else {
//     console.log("no it is not true")
// }


// let isLoggedIn = true

// console.log(isLoggedIn)


// if (isLoggedIn == false) {
//     console.log("no")
// } else {
//     console.log("yes")
// }

// let toggle = true
// console.log(toggle)

// toggle = !toggle
// console.log(toggle)

// console.log(!toggle)


// let sucess = true
// let fail = false

// console.log(sucess && sucess)
// console.log(sucess && fail)

// console.log(fail && sucess)

// console.log(fail && fail)

// console.log(sucess || sucess)
// console.log(sucess || fail)

// console.log(fail || sucess)

// console.log(fail || fail)

// console.log(!sucess)

// console.log(!fail)

// const num = 18

// if (num > 10) {
//     console.log("number is greater then 10")
// } else {
//     console.log("number is not greater then 10")
// }\

// const storedname = "sidhu"
// const password = "123*&123"

// const username = "sidhu"
// const key = "123*123"

// const agreuser = (storedname === username)
// const keyuseer = (password === key)

// if (agreuser && keyuseer) {
//     console.log("succesfuly logined...")
// }
// else {
//     console.log("unsuccessfuly retry again...")
// }

// if (storedname !== username) {
//     console.log("Give the valid or correct uername...")
// }
// if (password !== key) {
//     console.log("Give the valid or correct password...")

// }
// let light = true
// if (!light) {
//     console.log("on")
// } else {
//     console.log("off")
// }

const stri = "1221"
let i = 0
let flag = 1
let j = stri.length - 1
while (i <= j) {
    if (stri[i] != stri[j]) {
        flag = 0
        break;
    }
    i++
    j--

}
if (flag) {
    console.log("it is a palindrome...")
}
else {
    console.log("it is not a palindrome...")
}
