
function dropDown(){
    document.getElementById("before").style.display = "none";
    document.getElementById("after").style.display = "block";
    document.getElementById("container").style.display = "block";
}
function goUp(){
    document.getElementById("before").style.display = "block";
    document.getElementById("after").style.display = "none";
    document.getElementById("container").style.display = "none";
}

/*
var tl = new TimelineMax({onUpdate: updatePercentage});
const controller = new ScrollMagic.Controller();

tl.to("#tree",  2, {y: -55, opacity: 1});

const scene = new ScrollMagic.Scene({
    triggerElement: "#fifth",
    triggerHook: "onLeave",
    duration: "70%"
})

.setPin("#fifth")
.setTween(tl)
    .addTo(controller);

function updatePercentage(){
    tl.progress();
}
*/

let controller = new ScrollMagic.Controller();
let timeLine = new TimelineMax();

timeLine
.to('#tree', .5, {y: -200})
.to('.rock', 3, {y: -300}, '-=3')
.fromTo('.background', 3, {y:-50},{y:-50}, '-=3')
.to('.body', 5, {y: -600}, '-=3')
.to('.footer', 5, {y: -600}, '-=3')



.from('.quote', 8, {opacity: 0}, '-=2')
.from('.downNav', 8, {opacity: 0}, '-=8')
.from('.tips', 1, {opacity: 0}, '-=8')

let scene1 = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "70%",
    triggerHook: 0,
})

.setTween(timeLine)
.addTo(controller)
