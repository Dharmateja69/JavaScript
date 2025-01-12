// The "for ...of" loop in Javascript is a modern iteration statement introduced in ECMAScript 6(ES6)  that provides a concise and easy wayy to loop over elements in iterable objects like arrays, strings , maps, sets and more. it allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone .

// for (variable of iterable) {...}

let peoples = ["huxn", "alex", "john", "brd"]

for (let p of peoples) {
    console.log(p)
}

const text = "sidhu"

for (let i of text) {
    console.log(i)
}

//assignment 

const arr1 = ["a", "b", "c"]
for (let key of arr1) {
    console.log(key)
}
