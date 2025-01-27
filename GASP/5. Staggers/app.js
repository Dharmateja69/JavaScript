//

gsap.set(".box", {
    borderRadius: 0
})


gsap.to(".box", {
    borderRadius: 100,
    duration: 1,
    y: -100,
    repeat: -1,
    ease: "power1",
    yoyo: true,
    stagger: {
        amount: 4,
        each: 0.5,
        from: 0.

    }


})