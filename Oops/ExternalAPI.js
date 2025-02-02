// https://jsonplaceholder.typicode.com/
const btn = document.querySelector(".btn");
btn.addEventListener("click", makerequest);

const id = document.querySelector(".id");
const title = document.querySelector(".title");
const body = document.querySelector(".body");
const all = document.querySelector(".allpost");


function makerequest() {
    try {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                if (!res.ok) throw Error(res.statusText);
                return res.json();
            })
            .then((data) => {
                // id.textContent = data.id
                // title.textContent = data.title
                // body.textContent = data.body
                data.forEach(element => {
                    all.innerHTML +=
                        `id=${element.id}
                     title = ${element.title}
                     body = ${element.body}
                     </br>
                     </br>
                     </br>
                     </br>`
                });
            }).then((d) => {
                console.log('successful done ...')
            })
    } catch (error) {
        console.log(error)
    }
}
