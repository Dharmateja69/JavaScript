const arr = ["sihdf", "sidh", "sdsu"]
const arr1 = ["dskd", 'sdf0', "sdfsd"]
const clone = [...arr, ...arr1]
console.log(clone)


const user = {
    name: "sidhu",
    age: 18
}
const clone2 = { ...user }
console.log(clone2)