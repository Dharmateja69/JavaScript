//5:1:18 

// Default function parameters , introduced in ECMAScript 6 (ES6) , allow you to assign default values to function parameters . when a function is called , and an argument is not provided for a parameter, the default value will be used instead. This feature makes it easier to handle cases where arguments might be missing or undefined. 

// function countTo5(count = false) {
//     if (count === true) {
//         for (let i = 1; i <= 5; i++) {
//             console.log(`count ${i}`);
//         }
//     }
// }
// countTo5(true);

function ratings(rate) {
    if (rate === 5) {

        setTimeout(() => console.log(`High Ratings :)`), 3000)

    } else if (rate === 0) {

        setTimeout(() => console.log(`low Ratings :)`), 3000)
    }
}

ratings(0)
