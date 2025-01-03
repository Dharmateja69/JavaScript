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

// let pass = "sidhu-sid"
// if (pass.length >= 8 && pass.includes('e')) {//one true and other is false
//     console.log("valid password")
// } else {
//     console.log("not a valid password")
// }

// Arrays are used to store multiple data type are stored in it and (it is based on ->0 index based)

// empty array

// const mylis = [1, 2, 3, 1, 2, 3, 32, 1, 1,]
// for (let i = 0; i < mylis.length; i++) {
//     console.log("---" + mylis[i])
// }
// console.log(mylis)

// // nested array //or 2 d array
// const outA = ['one', ['two', '3', 1, 2, 3, true, "flase"], 4, "fail", "fail", "ddsd"]
// console.log(outA)
// console.log(outA[1][2])

// ======================================================================
// array methods

// const fruites = ["2323", "fsfdfss", "dsfsdfsd", "fsdfsfd", "sfsdfs"]
// const fruites1 = ["sidhu", "fsfdfss", "dsfsdfsd", "fsdfsfd", "sfsdfs"]
// const totalfruites = fruites.concat(fruites1)
// console.log(totalfruites)

// fruites.push("bannanna")//adds the new data at the end of the array
// console.log(fruites)
// fruites.pop()//removes the last element from the array
// console.log(
//     fruites
// )
// console.log(fruites)
// fruites.shift()//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(fruites)
// fruites.unshift('sidhu')//Inserts new elements at the start of an array, and returns the new length of the array.

// // @param items — Elements to insert at the start of the array.
// console.log(fruites)

// const pl = ['javas', 'golang', 'python', 'php']
// const nubmers = [3, 4, 5, 4, 5, 21, 32]

// console.log(pl.includes('golang'))
// console.log(pl.join('--$$--'))
// console.log(pl)
// console.log(pl.reverse())
// console.log(pl.slice(0, 2))//0 will be included where 2 is excluded  so it will go till 0,1 only
// console.log(nubmers.sort())

// OBJECTS -> {:,:,}
// const person = {
//     fname: "sidhu",
//     lname: "teja",
//     age: 12,
//     location: ['Planet', "Earth"], //nested
//     isProgrammer: true,
// }

// console.log(person)
// console.log(typeof person)

// //Accessing Items fro ou object
// //2 ways
// //dot notation
// console.log(person.isProgrammer)
// console.log(person.fname)
// console.log(person.age)
// //[] method
// console.log(person["location"])
// console.log(person["fname"])
// console.log(person["age"])

// person.fname = "sid"
// console.log(person)
// delete person.age
// console.log(person)
// ===============================================================================//
// 3-01-2025
//Json
// int this json we have to write the code in the curly {} braces only with double quotation
const sidhu = {
    name: "sidhu",
    age: 12,
    email: "abc@gamil.com",
    hobbies: ["Reading", "Running", "cooking"],
    address: {
        city: "new york",
        idk: true,
    },
};

//json.stringify()
// Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
// console.log(JSON.stringify(sidhu))

//json.parse()

// const string = JSON.stringify(sidhu)
// console.log(JSON.parse(string))

// how to work with date and time
// year , month , day , hours, minutes , seconds , milliseconds
// const currentDate1 = new Date(2025, 1, 10, 4, 23, 32);
// console.log(currentDate1);

// const currentDate = new Date();
// console.log(currentDate);

// const date = new Date();
// const year = date.getFullYear(); //Gets the year, using local time.

// const month = date.getMonth(); //Gets the month, using local time
// console.log(`year : ${year}`);
// console.log(`month : ${month}`);

// console.log(date.toDateString()); //Returns a date as a string value.

// console.log(date.toISOString()); //Returns a date as a string value in ISO format.

// console.log(date.toLocaleString()); //Converts a date and time to a string by using the current or specified locale.

// // to set own date we use
// date.setDate(date.getDate() + 1); //Gets the day-of-the-month, using local time.

// date.setDate(date.getDate() - 1); //Gets the day-of-the-month, using local time.

// console.log(date);


// //setInterval 
// // The setInterval() function is used to repeatedly execute a specified piece of code or function at fixed time intervals. It is commonly used to create periodic tasks, such as updating the time, animations, or polling data at regular intervals. 
// // syntax : const intervalId = setInterval(callback, delay, [args]);

// function thefunction() { console.log(`This function will be executed every 2 second. `) }//callback function
// setInterval(thefunction, 2000)

// function sayHello() {
//     console.log("Hello, World!");
// }

// // Call `sayHello` every 2 seconds
// const intervalId = setInterval(sayHello, 2000);

// // Stop the interval after 10 seconds
// setTimeout(() => clearInterval(intervalId), 10000);


// setTimeout()

// setTimeout(function () {
//     console.log(`This function will be executed after 3 seconds`), 3000
// })

// Stop the interval after 10 secnds
const intervalid = setInterval(function () {//use
    console.log(`This  funciron is being executed at the interval `)
}, 1000)

// Stop the interval after 10 seconds
setTimeout(function () {
    clearInterval(intervalid)//used to Cancels a Timeout object created by setInterval().


    console.log(`This Interval stopped`)

}, 10000)