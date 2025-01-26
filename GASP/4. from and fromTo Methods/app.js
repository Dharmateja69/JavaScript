//from & fromto method

// from in this method we dont have to specify the inital state , (it will figure out by itself)



gsap.from(".box1", {
    y: -200,
    duration: 1,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true
})


gsap.from(".box3", {
    y: -200,
    duration: 1,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true
})



// from to : In this method you HAVE to specify the default value , and also the new animation state.

gsap.fromTo(".box2", {
    y: 200, opacity: 0,
}, {
    opacity: 2,
    y: -200,
    duration: 1,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true
})
//gsap.fromTo(".clasname",{initial state},{final state})