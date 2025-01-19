// ------------------------------------//all the below methods will be located in document object only .
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterbegin'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------


// createElement()

// const h1 = document.createElement("h1")
// const body = document.body
// h1.textContent = "hello world"
// h1.classList.add("greetings")
// body.appendChild(h1)//it will append the element at the end of the body 
// console.log(h1)

//////////////===================

//let suppose we are willing to insert a new li before the li 1 we can acheive it by using insertbefore()

// const ul = document.querySelector("ul")
// console.log(ul)

// const newli = document.createElement("li")
// newli.innerText = "hello sidhu"
// ul.appendChild(newli)

// const firstli = document.querySelector("li")

// ul.insertBefore(newli, firstli)
//---------------------------------------------------------

// const firstp = document.querySelector('p')
// console.log(firstp.innerText)
// const i = document.createElement('i')
// i.innerText = "heloo this is new world!!"
// i.style.color = "red"
// firstp.insertAdjacentElement('beforebegin', i)
// firstp.insertAdjacentElement('afterbegin', i)
// firstp.insertAdjacentElement('beforeend', i)
// firstp.insertAdjacentElement('afterend', i)

//---------------------------------------------------------
// append()
// prepend()
// let section = document.querySelector('section')

// const i = document.createElement('i')//Creates an instance of the element for the specified tag.


// i.innerText = "heloo this is new world!!"
// i.style.color = "red"

// section.append(i)//Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.


// section.prepend(i)//Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

//=========================================
const list = document.querySelector(".new-list")
const fourth = document.querySelector(".fourth")
// list.removeChild(fourth)
// list.remove()













