// // Getting Elements From The DOM
// const btns = document.querySelectorAll(".btn");
// const body = document.body;
// // console.log(btns);

// // Iterating over all buttons
// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     number = btn.value;
//     changeBackground(number);
//   });
// });

// function changeBackground(number) {
//   // console.log(number);
//   body.className = "";

//   switch (number) {
//     case "purple":
//       body.classList.add("purple");
//       break;
//     case "blue":
//       body.classList.add("blue");
//       break;
//     case "red":
//       body.classList.add("red");
//       break;
//     case "green":
//       body.classList.add("green");
//       break;
//     case "yellow":
//       body.classList.add("yellow");
//       break;
//     case "teal":
//       body.classList.add("teal");
//       break;
//     default:
//       break;
//   }
// }
//Getting all the elements 
const btns = document.querySelectorAll(".btn")
const body = document.body
// console.log(btns)
// console.log(body)

//ForEach event lisetner iterating over the value.
//As we have different colors so we use the foreach loop.
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    number = btn.value
    // console.log(number)
    changeBackground(number)
  })
})

function changeBackground(number) {
  body.className = ""

  switch (number) {
    case "purple":
      body.classList.add("purple")
      // console.log(body.className)
      break;
    case "blue":
      body.classList.add("blue")
      break;
    case "red":
      body.classList.add("red")
      break;
    case "green":
      body.classList.add("green")
      break;
    case "yellow":
      body.classList.add("yellow")
      break;
    case "teal":
      body.classList.add("teal")
      break;
    default:
      break;

  }




}

















