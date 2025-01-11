// Destructing allows us to "unpack " values from data-structures (arrays, objects) into separate distinct variables.
// 5:30:38

// const foo = ["one", "two", "three"]

// const [A, B, C] = foo

// console.log(A, B, C)


// function f() {
//     return [1, 2]
// }
// let a, b

// [a, b] = f()
// console.log(a)
// console.log(b)

// //how to ignore a funciton returning

// function f() {
//     return [1, 2, 3]
// }
// const [V, , D] = f()
// console.log(V)
// console.log(D)

//Assigning the rest of an array to a varaible
// const [e, ...h] = ["one", "two", "three", "true", "12", ["one"]]

// console.log(e)
// console.log(h)

// In object destructing order doesnt matter but the name does matter

// 5:44:58

// const student = {
//     name: "sidhu", position: "second", rollno: 34

// }
// const { name, position, rollno } = student
// console.log(name)
// // console.log(pos)//it will not print the value because there is no meaning in chainging the object value position -> pos  we can directly printt the value 
// console.log(position)
// console.log(rollno)

//Object destructing and rest operator
// let { a, b, ...set } = { a: 23, b: 34, c: 234, d: 43, e: 65, f: 53, g: 43 }
// console.log(a)
// console.log(b)
// console.log(set)

// let { name, ...rest } = student
// console.log(name)
// console.log(rest)

// destructing in function 

// const person = {
//     name: "sidhu",
//     age: 20,
//     country: "usa",
// };

// function printPersonInfo({ name, age, country }) {
//     console.log(`Name: ${name}`)
//     console.log(`age:${age}`)
//     console.log(`country:${country}`)
// }

// printPersonInfo(person)

let options = {
    title: "My menue",
    items: ['item1', 'item2'],
}

function showmenue({ title = "untitled", width: w = 100, height: h = 20, items: [item1, item2] }) {
    console.log(`${title} ${w} ${h}`)
    console.log(item1)
    console.log(item2)
}

showmenue(options)