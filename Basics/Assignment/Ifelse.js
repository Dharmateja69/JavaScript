let password = "122e32wom";
// let b = 20;

if (password.length == 8) {
    console.log("welcome");
} else if (password.length >= 8) {
    console.log("Too long Password");
} else if (password.length <= 8) {
    console.log("password is to short");
} else {
    console.log("Please provide a password")
}
console.log(password.length)