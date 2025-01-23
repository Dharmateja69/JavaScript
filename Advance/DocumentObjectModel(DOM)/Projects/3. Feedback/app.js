// // Getting Elements From The DOM
// const ratings = document.querySelectorAll(".ratings");
// const ratingsContainer = document.querySelector(".ratings-container");
// const sendBtn = document.querySelector("#send");
// const panel = document.querySelector("#panel");

// let selectedRating = "Satisfied";

// // Attaching Event
// ratingsContainer.addEventListener("click", (e) => {
//   if (e.target.parentNode.classList.contains("rating")) {
//     console.log(e.target.classList.contains("rating"));
//     removeActive();

//     e.target.parentNode.classList.add("active");
//     selectedRating = e.target.nextElementSibling.innerHTML;
//   }
// });

// sendBtn.addEventListener("click", () => {
//   panel.innerHTML = `
//     <p class="heart">💖</p>
//     <strong>Thank You! </strong>
//     <br>
//     <strong>Feedback: ${selectedRating} </strong>
//   `;
// });

// function removeActive() {
//   for (let i = 0; i < ratings.length; i++) {
//     ratings[i].classList.remove("active");
//   }
// }

//Getting element from the DOM
const ratings = document.querySelectorAll(".ratings");
// console.log(ratings)
const ratingContainer = document.querySelector(".ratings-container");
// console.log(ratingContainer)
const sendBtn = document.querySelector("#send");
// console.log(sendBtn)
const panel = document.querySelector("#panel");
// console.log(panel)

let selectedRating = "Satisfied";

//Attach Events
ratingContainer.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("ratings")) {
        removeActive();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});

sendBtn.addEventListener("click", () => {
    panel.innerHTML = `
    <p class="heart">❤️</p>
          <strong>Thank you</strong>
    <br>
        <strong strong > Feedback:${selectedRating}</strong>`;
});

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove("active");
    }
}
