what is events ?
    javascript's interaction with html is handled through event that occur when the user or the broowser manipulates a page.

example -> when the page is loaded, it is a event, when the user clicks a button, that click too is an event.in simple we can say as every action done by the user is called as event.

----------- BAD WAY-----------
const secondbtn = document.querySelector(".second-btn")

secondbtn.onclick = alert("hi")// if we use this it will load till we click on it which is not actualy good. instead we can use the function.
secondbtn.onclick = function () {
    // alert("hi sidhu")
    console.log("sidhu")//This is the bad way of using inline function.
}
----------- GREAT WAY-----------
const best = document.querySelector('.best')
function onclickevent() {
    console.log("hi bro!!")
}
best.addEventListener("click", () => {
    console.log("yellow")
})//this is the bestway to use events using addEventListener()


----------- Event(e) Object-----------

const para = document.querySelector(".para")

para.addEventListener('click', (event) => {
    console.log(event)//here the event object will give the infomation about the click event properties.
})

const form = document.querySelector("form")
const input = document.querySelector("input")
form.addEventListener("submit", (event) => {
    // console.log(event)//as we see on submiting it results in flash way so we have to use preventdefault() method to bypass the above problem
    event.preventDefault()
    console.log(input.value)
})
