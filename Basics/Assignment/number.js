let firstfav = 6;
let secondfav = 15
// console.log(firstfav + secondfav)
// console.log(firstfav - secondfav)
// console.log(firstfav * secondfav)
// console.log(firstfav / secondfav)
// console.log(firstfav % secondfav)
// console.log(firstfav ** secondfav)

if (firstfav % 2 == 0) {
    console.log("This is even")
}
else {
    console.log("This is odd")
}

const flop = 3.5059343999202
console.log(Math.floor(flop))

const fact = 5
let num = 1
for (let index = 2; index <= fact; index++) {
    num = num * index

}
console.log(num)

for (let index = 1; index < 100; index++) {
    console.log(Math.random())

}

//gcd
let first = 36
let second = 60
while (first != second) {
    if (first > second) {
        first = first - second
    }
    else {
        second = second - first
    }
}
console.log(first)

// hard 
//sidhu

const sidhu = 2

let count = 0
for (let index = 2; index <= sidhu; index++) {
    if (sidhu % index == 0) {
        count++;
    }

}
if (count > 1) {
    console.log("not sidhu")
} else {
    console.log("sidhu")
}




for (let sidhu = 1; sidhu <= 100; sidhu++) {
    let count1 = 0

    for (let index = 1; index <= 100 / 2; index++) {
        if (sidhu % index == 0) {
            count1++;
        }

    }
    if (count1 > 1) {
        console.log(`not prime ${sidhu}`)
    } else {
        console.log(`prime ${sidhu}`)
    }

}

