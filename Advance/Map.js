// the map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4, 5]

let double = numbers.map((num) => num * 2)
console.log(double)
console.log(numbers

)
//  so the basic difference between the foreach loop and map is that in foreach loop it change the exiting array , where as in the map it will not change the exisiting array instead it wil change the arry where we are storing so this is the basic difference.

//  it can convert the object to array form

let people = [
    { firstname: "sidhu", secondname: "teja" },
    { firstname: "Hi", secondname: "sidhu" },
    { firstname: "this", secondname: "is" }

]

const results = people.map(person => {
    return [person.firstname, person.secondname]
})
console.log(results)

// Assignment

const array = [1, 3, 4, 3, 2, 4, 4, 2]

function num(mul) {
    return mul * 10
}

const by10 = array.map(mul => {
    return mul * 10
})

console.log(by10)
console.log(array)