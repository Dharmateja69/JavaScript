// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)


const ancor = document.querySelector('a')
console.log(ancor.href)
console.log(ancor.getAttribute("href"))

const second = document.querySelector(".a-two")
console.log(second.href = "www.school.com")
const area = document.querySelector("input")
area.setAttribute("placeholder", "hi this new code")

