const person = {
    name: "sidhu",
    age: 31,
    gender: "male",
    country: "usa"
};
//your task is to use object dest to extract the name,age, and country properties from the person object.
// after extracting the properties , log each variables value to the console

const { name, age, gender, country } = person
const { name: n } = person
console.log(n)
console.log(age)
console.log(gender)
console.log(country)