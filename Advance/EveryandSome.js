// ////////////////////////////////////////////////////////
// The every() and some() are two built-in array methods in javascript that allow you to check the elements of an array based on a given condition . Both methods take a callaback function as an argument , which is applied to each element of the array .

// The every() method tests whether all elememnts in the array pass the condition
//  specified by the provided callback function. It returns true if the callback function returns true for every element and false if any element fails the condition/

// The some() method tests whether at least one element in the array passes the condition specified by the provided callback function. It returns true if the callback function returns true for at least one element and false if no element passes the condition.
///////////////////////////////////////////////////////////////(6.54.20)

// const peoples = ["siduh", "sdfs", "sdfsdf"]
// let ans = peoples.every(p => p.length === 4)//Determines whether all the members of an array satisfy the specified test.


// console.log(ans)
// let ans1 = peoples.some(p => p.length === 4)//Determines whether the specified callback function returns true for any element of an array.


// console.log(ans1)



const songs = [
    { name: "lucky you", duration: 4.32 },
    { name: "just you", duration: 2.0 },
    { name: "lucasasky you", duration: 1.2 },
    { name: "lucdsdky you", duration: 23.0 },

]

let everRes = songs.every((son) => son.duration > 2)
console.log(everRes)
let someres = songs.some((son) => son.duration > 2)
console.log(someres)

