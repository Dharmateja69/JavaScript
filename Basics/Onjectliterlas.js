//Enchanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript . These enhancements make it more convenient and concise to define object properties and methods.

//new way to declare the object synatx
function user(name, age, work) {
    return {

        name,
        age,
        work,

    }
}

const data = user("sidhu", 19, "student")
console.log(data)

// 2 enhancements for objects is for methods


function user1(name, age, work) {
    return {

        name,
        age,
        work,
        intro() {
            console.log(`Hi iam ${age} and my name is ${name}`)
        },

    }
}
const sid = user1("sidhu", 12, "student")
console.log(sid.intro())