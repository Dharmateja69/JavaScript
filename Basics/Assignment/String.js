// let favactorname = "sidhu"
// let favactoelast = "teja"
// let fullname = favactoelast + favactorname
// console.log(fullname)
// console.log("===========================")
// console.log(favactoelast.toUpperCase())
// console.log("============================")
// let message = `My favourite actor is ${favactorname.toUpperCase()} & say something about your fav actor `
// console.log(message)
// console.log("============================")
// message += `his best show is silicon valley`
// console.log(message)
let st1 = "sidhu";
let st2 = "teja";

// let addofstring = //st1 + st2 //st1.concat(st2)
// console.log(addofstring)

// let stringlength = st1.length
// console.log(stringlength)

// console.log(st1.toUpperCase())
// console.log(st2.toLowerCase())

//1. Write a program to reverse a string (e.g., `hello` → `olleh`).

// let i;
// let j = 0;
// let len = st1.length;
// let rev = []//intilizing the rev as array .
// for (i = len - 1; i >= 0; i--) {
//     rev[j++] = st1[i];
// }
// rev[j] = "\0";
// console.log(rev);
// console.log(rev.join(' '))//Adds all the elements of an array into a string, separated by the specified separator string.

// Check if a string starts with a specific character or ends with another.

// let start = "s"
// let end = "u"
// if (st1[0] === start && st1[st1.length - 1] === end) {
//     console.log(`yes they are correct ${st1}`)
// } else {
//     console.log(`NO they are NOt correct ${st1}`)

// }

// 3. Extract the first 5 characters of a string.
let st4 = "sedidsadfwfweewehduh";

// for (let i = 0; i < st4.length; i++) {
//     if (i == 5) {
//         break;
//     } else {
//         console.log(`${i}::${st4[i]}`);
//     }
// }
// Create a program that counts the number of vowels in a string.
// let count = 0;
// for (let i = 0; i < st4.length; i++) {
//     let s = st4[i].toLowerCase();
//     if ("a" == s || "e" == s || "i" == s || s == "o" || s == "u") {
//         count++;
//     }
// }
// console.log(count)

// 2. Write a program to find the most frequently occurring character in a string.

// let freq = [];
// for (let i = 0; i < 26; i++) {
//   freq[i] = 0;
// }
// for (let i = 0; i < st4.length; i++) {
//   let charcode = st4.charCodeAt(i) - 97;
//   if (charcode >= 0 && charcode < 97) {
//     freq[charcode]++;
//   }
// }

// function morefrequencey(num) {
//   return num >= 1;
// }

// const highfreq = freq.filter(morefrequencey);
// console.log(highfreq);

// 3. Implement a program that checks if one string is an anagram of another.
// let a1 = "sidhu";
// let a2 = "duhsi";

// function anagram(s1, s2) {
//   s1 = s1.split("").sort().join("");
//   s2 = s2.split("").sort().join("");
//   console.log(s1);
//   console.log(s2);
//   return s1 === s2;
// }

// console.log(anagram(a1, a2));
