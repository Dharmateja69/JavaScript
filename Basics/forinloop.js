///The "for...in" loop in javacript is used to iterate over the enumerable properties of an object . It is a way to loop through the keys (property names) of an object.

// for (let key in object) {...}

const obj = {
    name: "sidhu",
    age: 34,
    year: "83009"
}

for (let index in obj) {
    console.log(`${index}:${obj[index]}`)
}

let list = ["one", "two", "second", "three", "four"]
for (let index in list) {
    console.log(`${index} ${list[index]}`)
}

// Asssignment
// Iterate over object and log the property and the value of that object using forin loop.

const objh = { a: 1, b: 2, c: 4 }
for (let key in objh) {
    console.log(`${key}:${objh[key]}`)
}
