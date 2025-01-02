// //primitive data type
// let num = 10.01;
// console.log(typeof num)
// // Basic Math
// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 + 3)
// console.log(2 % 2)
// console.log(2 / 2)
// console.log(2 ** 2)//power of variable 2^2 =4
// console.log("===========================================")

// let counter = 0;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter--;
// counter--;
// counter--;
// counter--;
// counter--;
// counter--;
// counter--;

// console.log(counter)

// Boolean -> true|| false
// let isTrue = true;
// let isFalse = false;
// let notanumber = NaN;
// let num = 10;
// console.log(num + undefined)

// console.log(isFalse)

// console.log(isTrue)
// console.log(notanumber)
//->falsy so these all are the falsy values other then that are true values
// false
// null
// undefined
// 0
// -0
// NaN
// '',"",``,(emptty quotes)

// let noDefined = undefined;//but here it is done by the javascript compiler
// let noDefined1 = null; //it can be manualy added by the developer

// console.log(noDefined)
// console.log(noDefined1)

// Comparison Operators are divided
// relational operators
// > Greater then,< less then,>= greater then equal,<= less then equal
// console.log(10 > 10)//gives a boolean value true||false

// console.log(10 < 10)
// console.log(10 <= 10)
// console.log(10 >= 10)

// console.log("===================================================")

// Equality Operators
// ===strict equality (type+value)
// !=== strict non-equality operators (type+value)
// ==lose equality operator (value)
// !== lose not equality operator(value)
// console.log(10 === 10)
// console.log(10 === 20)
// console.log(10 === 20)

// console.log(10 === "10")
// console.log(10 == "10")

// Strings

// let firstname = '      sidhu'
// let second = "webdev"
// let fullname = firstname + " " + second//This process is known as string concatination
// console.table({ fullname })
// //1.Concatination

// let fulln = firstname.concat(second)//concat is a method used to concatinate the string
// console.table({ fulln })

// //2.Append

// firstname += " something else"
// console.log(firstname)
// //3.lenght

// console.log(firstname.length)

// //4.cases
// console.log(firstname.toLowerCase())
// console.log(firstname.toUpperCase())

// //5.slice
// console.log(firstname.slice(0, 5))//in this only start=0 is included where end=5 is excluded

// //6.Split and join
// console.log(firstname.split(" "))//if it is  split("") then it will give in the from of array of letters where as if it is split(" ") then it will give in the form of word array
// //7.Includes
// console.log(firstname.includes("i"))//it returnn true or false if the charc is present or not int he word

// //8. Trim
// console.log(firstname.trim())

// let desc = `"this is some randmom

// text

// "`
// console.log(desc)

//type conversion
// let money = "50"
//-Convert string to number

// money = parseInt(money)
// money = +money
// money = Number(money)

//how to convert number to string
// money = money.toString();
// console.log(money)
// console.log(typeof money)

// how to convert string to decimal
//type conversion in javascript
// let m = "40.432"
// m = parseFloat(m)

// console.log(m)
// console.log(typeof m)

///===============================================================
//control flow in programming language

//if(condition){------}
//else if(condition){------}
//else{------}

// let a = 10;
// let b = 20;
// if (a > b) {
//     console.log("a is greater then b");
// } else {
//     console.log("b  is greater then a");
// }
// if (a > b) {
//     console.log("a is greater then b");
// } else if (a == b) {
//     console.log("a and b are same!!");
// } else {
//     console.log("b  is greater then a");
// }
// Switch Statements
//another way to control the flow of the program

//switch(expression){
//case x:
//print;
//break;
//case y:
// print;
//break;
// default:
// break;
// }

// let x = 2
// let bulb

// switch (x) {
//     case 0:
//         bulb = "off"
//         console.log(bulb)
//         break
//     case 1:
//         bulb = "on"
//         console.log(bulb)
//         break
//     default:
//         console.log("invalid input")
// }
//===================================================================
// for loop // DRY->Do not repeat 

// let t=1

//syntax: for(inititalexpression ; condition; incremment or decrement expression)

// for (let index = 0; index < 4; index++) {
//     console.table({ index });
//     console.log("sidhu", index)

// }
// nested for loop
// for (let index = 0; index < 10; index++) {
//     console.log("======outer loop===")
//     for (let index = 0; index < 4; index++) {
//         console.log("====innerloops====")
//     }
// }

// =======================================================
// while(condtion){  statement............}


// let i = 0
// while (i <= 5) {
//     console.log('hello world', i)
//     i++;
// }
// do while loop
//not much required
// let i = 20

// do {
//     console.log("sidhu")
//     i++;
// } while (i <= 200)

// 1->Logical AND(&&)
// // True if both the operands/booleam values are ture evaluates to false if both are false
// const a = true
// const b = false
// const c = 4
// console.log(c > 2 && c < 2)

// // 2-> Logical OR(||)
// // True if either the operands/booleam values are ture evaluates to false if both are false
// console.log(a || b)
// console.log(a || a)
// console.log(b || b)



// // 3-> Logical NOT(!)
// // true if the operands is false and vice-versa
// console.log(!a)
// console.log(b)
// console.log(!b)
// console.log(a)


let pass = "sidhu-sid"
if (pass.length >= 8 && pass.includes('e')) {//one true and other is false 
    console.log("valid password")
} else {
    console.log("not a valid password")
}

// Arrays are used to store multiple data type are stored in it and (it is based on ->0 index based)

// empty array

const mylis = [1, 2, 3, 1, 2, 3, 32, 1, 1,]
for (let i = 0; i < mylis.length; i++) {
    console.log("---" + mylis[i])
}
console.log(mylis)

// nested array //or 2 d array
const outA = ['one', ['two', '3', 1, 2, 3, true, "flase"], 4, "fail", "fail", "ddsd"]
console.log(outA)
console.log(outA[1][2])



