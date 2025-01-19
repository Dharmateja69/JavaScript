// https://www.w3schools.com/jsref/obj_mouseevent.asp

// 1. click
// 2. contextmenu
// 3. dblclick
// 4. mousedown
// 5. mouseenter
// 6. mouseleave
// 7. mousemove
// 8. mouseout
// 9. mouseover
// 10. mouseup

let one = document.querySelector(".click");
let two = document.querySelector(".contextmenu");
let three = document.querySelector(".dblclick");
let four = document.querySelector(".mousedown");
let five = document.querySelector(".mouseenter");
let six = document.querySelector(".mouseleave");
let seven = document.querySelector(".mousemove");
let eight = document.querySelector(".mouseout");
let nine = document.querySelector(".mouseover");
let ten = document.querySelector(".mouseup");
// 9.34.51

one.addEventListener("click", () => {
    one.classList.toggle("red"); //on left click the color will change.
});

two.addEventListener("contextmenu", () => {
    two.classList.toggle("blue"); //on right click the colour will change.
});

three.addEventListener("dblclick", () => {
    three.classList.toggle("orange");
});

four.addEventListener("mousedown", () => {
    four.classList.toggle("steelblue")
})


five.addEventListener("mouseenter", () => {
    five.style.color = "red"
    console.log("five")
})
six.addEventListener("mouseleave", () => {
    six.style.color = "yellow"
    console.log("six")
})

seven.addEventListener("mousemove", () => {
    seven.textContent = "Hello!!"
})


seven.addEventListener("mousemove", () => {
    seven.textContent = "Hello!! 7"

})


eight.addEventListener("mouseout", () => {
    eight.textContent = "Hello!! 8"

})


nine.addEventListener("mouseover", () => {
    nine.textContent = "Hello!! 9"

})

ten.addEventListener("mouseup", () => {
    ten.textContent = "Hello!! 10"

})
