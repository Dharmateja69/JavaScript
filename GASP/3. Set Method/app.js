//here we will use set method which is used to set the property to the element before it animating.
//gasp.set("clasname",{vars object})
gsap.set(".box", {
    opacity: 0,
    background: "black",
});

gsap.to(".box", {
    opacity: 10,
    background: "white",
    duration: 5,
    y: 100,
    repeat: -1, //-1 means it will repeate till infinity times
    yoyo: true,//menas going reverse to the starting state.
});
