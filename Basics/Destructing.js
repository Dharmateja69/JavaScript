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

// let options = {
//     title: "My menue",
//     items: ['item1', 'item2'],
// }

// function showmenue({ title = "untitled", width: w = 100, height: h = 20, items: [item1, item2] }) {
//     console.log(`${title} ${w} ${h}`)
//     console.log(item1)
//     console.log(item2)
// }

// showmenue(options)

// const songs = [
//     { name: "Lucky You", singer: "Joyner", duration: 4.34 },
//     { name: "Just Like You", singer: "NF", duration: 3.23 },
//     { name: "Humble", singer: "Kendrick Lamar", duration: 2.33 },
//     { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
//     { name: "Cold Shoulder", singer: "Central Cee", duration: 5.23 },
// ];

// const [, , { singer }] = songs;
// const [, , { singer: s }] = songs;
// console.log(s);
// const data = {
//     user: {
//         id: 123,
//         name: "John Doe",
//         age: 30,
//         email: "john.doe@example.com",
//         address: {
//             city: "New York",
//             country: "USA",
//         },
//         hobbies: ["Reading", "Painting", "Cooking"],
//         scores: {
//             math: 95,
//             science: 88,
//             history: 75,
//         },
//     },
//     products: [
//         { id: 1, name: "Laptop", price: 1000 },
//         { id: 2, name: "Phone", price: 800 },
//         { id: 3, name: "Tablet", price: 500 },
//     ],
//     settings: {
//         darkMode: true,
//         notifications: {
//             email: true,
//             sms: false,
//             push: true,
//         },
//         language: "English",
//     },
// };

// Extracting data using object destructuring
// const {
//     user: {
//         name,
//         age,
//         address: { city, country },
//         hobbies,
//         scores: { math, science, history },
//         email,
//     },
//     products: [product1, product2, product3],
//     settings: {
//         darkMode,
//         notifications: {
//             email: emailNotifications,
//             sms: smsNotifications,
//             push: pushNotifications,
//         },
//         language,
//     },
// } = data;

// // Logging the extracted data using template literals
// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Address: ${city}, ${country}`);
// console.log(`Hobbies: ${hobbies.join(", ")}`);
// console.log(`Math Score: ${math}`);
// console.log(`Science Score: ${science}`);
// console.log(`History Score: ${history}`);
// console.log(`Product 1: ${product1.name} - $${product1.price}`);
// console.log(`Product 2: ${product2.name} - $${product2.price}`);
// console.log(`Product 3: ${product3.name} - $${product3.price}`);
// console.log(`Dark Mode: ${darkMode}`);
// console.log(`Email Notifications: ${emailNotifications}`);
// console.log(`SMS Notifications: ${smsNotifications}`);
// console.log(`Push Notifications: ${pushNotifications}`);
// console.log(`Language: ${language}`);

const data = {
    user: {
        id: 123,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        address: {
            city: "New York",
            country: "USA",
        },
        hobbies: ["Reading", "Painting", "Cooking"],
        scores: {
            math: 95,
            science: 88,
            history: 75,
        },
    },
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 800 },
        { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
        darkMode: true,
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        language: "English",
    },
};

const {
    user: {
        id,
        name,
        age,
        email,
        address: { city, country },
        hobbies,
        scores: { math, science, history }, },
    products: [product1, product2, product3],
    settings: {
        darkMode,
        notifications: { email: emailnotification, sms: smsnotification, push: pushnotification },
        language,
    },
} = data

console.log(`Name:${name}`)
console.log(`Age:${age}`)
console.log(`Email:${email}`)
console.log(`Address:${city},${country}`)
console.log(`Hobbies:${hobbies} `)
console.log(`Math:${math}`)
console.log(`Math:${science}`)

console.log(`Math:${history}`)

console.log(`Product${product1.id}:${product1.name} and ${product1.price}`

)
console.log(`Product${product2.id}:${product2.name} and ${product2.price}`)

console.log(`Product${product3.id}:${product3.name} and ${product3.price}`)

console.log(`Darkmode:${darkMode}`)
console.log(`Email:${emailnotification}`)
console.log(`Sms:${smsnotification}`)

console.log(`push:${pushnotification}`)
console.log(`Language:${language}`)
