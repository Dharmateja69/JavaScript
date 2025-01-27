//Timelin

var tl = gsap.timeline()
//we can refactor it 
// tl.to(".box1", {
//     duration: 2,
//     scale: 0,
//     opacriy: 0,
//     delay: 1,
// }).to(".box2", {
//     duration: 2,
//     x: -200,
// }).to(".box3", {
//     duration: 2,
//     x: -200,
//     borderRadius: 0,
//     rotate: 360
// }).set(".box1", {
//     duration2,
//     scale: 1,
//     opacity: 1,
// })
// Refactor👇
tl.to(".box1", {
    // duration: 2,
    scale: 0,
    opacity: 0,
    delay: 1,
}).to(".box2", {
    // duration: 2,
    x: -200,
}).to(".box3", {
    // duration: 2,
    x: -200,
    borderRadius: 0,
    rotate: 360
}).set(".box1", {
    x: 200,
}).to(".box1", {
    scale: 1,
    opacity: 1,
})