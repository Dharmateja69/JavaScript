
function multiply(a, b = 1) {
    return setTimeout(() => console.log(`multiply of the number a and b : ${a * b}`), 2000)
}

multiply(2, 2)
multiply(5)