// classlist
// add()
// remove()
// toggle()

const h1 = document.querySelector('h1')
console.log(h1.classList)
//DOMTokenList [value: '']
// if we remove the class in the html class="styles" then the css for the clas will be automatically removed , now to add again through the javascript we use

h1.classList.add("styles")
console.log(h1.classList)//DOMTokenList ['styles', value: 'styles']

//now if we are intersted in removing the class then we use.

h1.classList.remove("styles")
console.log(h1.classList)//app.js:17 DOMTokenList [value: '']

//  to work on the both the add and remove method at a time we will use toggle it will handel if there is no class it will insert if there is a class it will remove

h1.classList.toggle("styles")//here it will add ....['styles', value: 'styles']
h1.classList.toggle("styles")//here it will remove ....[value: '']
h1.classList.toggle("styles")


console.log(h1.classList)


