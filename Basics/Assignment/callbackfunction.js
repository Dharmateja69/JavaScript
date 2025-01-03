

function showcallfunc(fn) {//here fn is the call back function

    const value = 10
    fn(value)//dd


}
//call back function 
function fn(value) {
    console.log(`this the value is ${value}`)
}

showcallfunc(fn)