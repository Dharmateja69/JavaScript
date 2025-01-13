//  when we call the foreach helper we pass in anonymous callback function,
// This function gets called one time for every element in the array whatever is inside the function that logic happens.


// const colors = ["teadk", "blue", "red"]

// for (let index = 0; index < colors.length; index++) {
//     const element = colors[index];
//     console.log(element)

// }

// using for each loop

// colors.forEach((index) => console.log(index))


const words = ["sidhu", "is", "a", "good", "boy", "in", "his", "class"]
//(method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// Performs the specified action for each element in an array.
words.forEach((word, index, arr) => {
    arr[index] = word[0].toUpperCase() + word.substring(1)
})
console.log(words)

// Assignment

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0

function adder(number) {
    sum += number;
}


numbers.forEach(adder) //her the adder function  is the callback function.
console.log(sum)