// const car = {

//     type: "car",
//     model: "latest model",
//     color: "red",
// }
// console.log(typeof car)
// car.type = "Toyota"
// car.wheels = 3//new prop is added

// console.log(car)

// ### **22. JavaScript Objects**

// #### Easy:
// 1. Create an object with properties for name, age, and city, then print the values.
const obj = {
    name: "sidhu",
    age: "12",
    city: "mumbai",
};
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
// 2. Write a program to add a new property to an object dynamically.
obj.address = "district-kota";
console.log(obj);
// 3. Access and update a property of an object using dot and bracket notation.
obj.name = "dharma teja";
console.log(obj);

// #### Medium:
// 1. Write a program to iterate over an object’s properties using a `for-in` loop.
for (item in obj) {
    console.log(item);
}
// 2. Use `Object.keys()` and `Object.values()` to get all the keys and values of an object.
console.log(Object.keys(obj))
console.log(Object.values(obj))

// 3. Write a program to merge two objects into one.
const obj1 = {
    "nam": "tej",
    "year": "2323",

}
const merge = Object.assign(obj, obj1)//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.


console.log(merge)

// #### Hard:
// 1. Create a nested object representing a student with details like name, marks, and subjects, and access nested properties.
const details = {
    "userId": "1",
    "description": "Student details",
    Student: {
        "name": "sidhu",
        "marks": "23",
        "subjects": ["science", "maths", "chemistry"]
    }

}
console.log(details)
// 2. Implement a program to delete a specific property from an object.
delete (details.description)
console.log(details)
// 3. Use `Object.entries()` to convert an object into an array of key-value pairs and loop through it.
console.log(Object.entries(details))
