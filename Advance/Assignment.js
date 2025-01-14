let pro = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
]



// for (let i = 0; i < pro.length; i++) {
//     if (pro[i].category === "Books") {
//         product = pro[i];
//         break;
//     }
// }
// other way of find method
const product = pro.find(key => key.category === "Books")
console.log(product)
