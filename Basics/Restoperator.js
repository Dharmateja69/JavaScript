//the rest operator synax allows a function to accept an indefinite number of arguments

// as an array , providing a way to represent variadic functions in javascript

function name(...user) {
    console.log(user)
}
name("sidhu", 12, "sihsdf", "sdsdf", "sdfsdf")

//now bit different is it is mandotory that we have to provide the rest operator after the single parameters only 

function use(x, ...user1) {
    console.log(x)
    console.log(user1)
}
use("sidhu", 223, "sdifhsud", "sdsdsfsd", 'sdfsfsd', "dsfsdfsdf", "sdfsdf", "like wise we can provide a indifintie numbers of parameters ")// in this case the output will be like 
// sidhu
//  [223, 'sdifhsud', 'sdsdsfsd', 'sdfsfsd', 'dsfsdfsdf', 'sdfsdf', 'like wise we can provide a indifintie numbers of parameters ']

function user(x, b, ...users) {
    console.log(x)
    console.log(b)
    console.log(users)
}

user("sidhi", "sdfds", "ssdf", "sdfsdfsdf332", 34534)
