// ### **26. Variable Scope**
// **Definition:** Variable scope refers to the context within which a variable is accessible in JavaScript. It can be global, local, or block scope. The scope determines the visibility and lifespan of variables. Additionally, JavaScript has function scope (for variables declared with `var`) and block scope (for variables declared with `let` and `const`).

// 1. ** Declare variables using var, let, and const in the global scope and access them.**
// let num = 10;
// const nochange = 4343;
// var tisavariable = 43;
// console.log(num);
// console.log(nochange);
// console.log(tisavariable);

//2. ** Write a program to demonstrate block scope using let and const.**

// if (true) {
//     let blocklet = "sidhu";
//     console.log(`${blocklet} it is inside the scope of the if block:`);
// }
// console.log(`${blocklet} it is inside the scope of the if block:`); //here we will get error stating that the bloclet variable is not defined.

//3. ** Show how var behaves inside a function scope.**

// function to() {
//     var str = "sidhu";//local
//     console.log(str);
// }
// to();
// console.log(str);//str is not defined
//1. ** Write a program that demonstrates the difference between local and global scope.**

// let numer = 23; //global var
// function set() {
//     let anum = 32;
//     console.log(
//         `It is a local variable which can accessed by inside only ${anum}`
//     );
//     console.log(
//         `its  a global variable which can be acessed from any were ${numer}`
//     );
// }
// set();
// console.log(anum);//anum is not defined scope variable
// console.log(numer);

//2. ** Create a function to modify a global variable and show its effect.**
//so global varibales can be modifed by the funciton
// let global = "sidhu";
// console.log(global);

// function modify() {
//     global = "tesja";
//     console.log(global);
// }
// modify();
// console.log(global);

//3. ** Use closures to demonstrate how local variables are preserved.**//closures means nested function, which enclose the implementation

function outer() {
    let count;
    return function () {
        return count + 1;
    };
}
let count = outer();
console.log(count());
console.log(count());

//1.** Write a program to simulate private variables using closures.**
function Createprivate() {
    let count;
    return {
        increment: function () {
            count++;
            return count;
        },
        getcount: function () {
            return count;
        },
    };
}
const privaevar = Createprivate();
console.log(privaevar.increment());
console.log(privaevar.getcount());
//2. ** Implement a program to demonstrate variable hoisting with var.**
console.log(x);  // Output: undefined (due to hoisting)
var x = 5;
console.log(x);  // Output
//3. **Write a program that demonstrates the temporal dead zone with let and const.**

console.log(y);  // Error: Cannot access 'y' before initialization
let y = 10;

console.log(z);  // Error: Cannot access 'z' before initialization
const z = 20;
