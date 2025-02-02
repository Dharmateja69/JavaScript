console.log(fetch("ext.txt"))
// how can we fetch the data from 3rd party.
// callback
// new promise()
// async/await
// text() method return a promise 
// If resolved will return text representation of body.
// Fetch API promise only rejects when we have newtwork error (not in other cases)

// const result = document.querySelector(".results")
// fetch("ext.txt")
//     .then(res => {
//         if (!res.ok) throw Error(res.statusText)
//         return res.text()
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// async function renderdata() {
//     try {
//         const response = await fetch('ext.txt')
//         if (!response.ok) throw Error(response.statusText)
//         const data = await response.text()
//         result.textContent = data
//     } catch (error) {
//         console.log(error)
//     }

// }
// renderdata()

// rendering the json
const result = document.querySelector(".results")
async function Renderingjson() {
    try {
        const res = await fetch("data.json")
        if (!res.ok) Error(res.statusText)
        const data = await res.json()
        result.textContent = data.name
        result.textContent = data.age


    } catch (error) {
        console.log(error)
    }

}
Renderingjson()
