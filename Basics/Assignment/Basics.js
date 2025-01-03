// // 1
// let name = "sidhu"
// // 2
// let whatDoyouwannaBecomeInYourlife = "Programmer"
// // 3
// let gender = "male"
// // 4
// let twitterHandle = "url______url"
// // 5
// console.log(name)
// console.log(whatDoyouwannaBecomeInYourlife)//console is object where we will have the different methods for the object
// console.log(gender)
// console.log(twitterHandle)

// console.table({ name, whatDoyouwannaBecomeInYourlife, gender, twitterHandle })

let x = 10
console.log(x)

let a = 10
let y = 11
a = a + y
y = a - y
a = a - y
console.table({ a, y })

let asd = "sidhu"
console.log(asd)

const c = 30
console.log(c)

const ab = 30
const g = 29
const re = 34

console.log((a + g + re) / 3)

//swaping using destructing 
// let acb = 1;
// let bc = 2;
// let cd = 3;

// [acb, bc, cd] = [cd, acb, bd]; // Swapping values using destructuring

// console.log("a:", acb); // 3
// console.log("b:", bc); // 1
// console.log("c:", cd); // 2

function febinocci(n) {
    let feb = [0, 1]

    for (let index = 2; index <= n; index++) {
        feb[index] = feb[index - 1] + feb[index - 2]

    }
    return feb

}

let n = 10

console.log(febinocci(n))


