const btn = document.querySelector("#emoji");//for id we will use this. # type. for class we will use (.) dot operator

const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];

btn.addEventListener("mouseover", () => {
  btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
  // console.log(Math.floor(Math.random() * emojis.length))//we use this because the randome //value will not exceed from this range
})