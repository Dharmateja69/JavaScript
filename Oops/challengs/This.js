

const person = {
    name: "sidhu",
    age: 23,
    greetRegular: function () {
        return ` hello, my name is ${this.name} & im ${this.age}`
    },
    gretArrow: () => {
        return `hellow , my name is ${this.name}and years old`
    }
}

// let res = person.greetRegular()
let res = person.gretArrow()

console.log(res)