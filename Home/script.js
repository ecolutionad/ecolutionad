import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


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

//THIRD
/*if(window.innerWidth >= 600){
    gsap.to(".pin",{
        scrollTrigger:{
            trigger: ".pin",
            start: "center center",
            scrub: true,
            pin:".pin",
            end: "+=300"
        },
    })
    gsap.to(".pin2",{
        scrollTrigger:{
            trigger: ".pin",
            start: "center center",
            scrub: true,
            pin:".pin2",
            end: "+=300"
        },
    })
}*/

//FOURTH
gsap.to("#fourth",{
    scrollTrigger:{
        trigger: "#fourth",
        start: "top top",
        scrub: true,
    },
})
gsap.to("#back",{
    scrollTrigger:{
        trigger: "#fourth",
        start: "top center",
        scrub: true,
        duration:20
    },
    y:250,
    scale:1.5
})
gsap.to("#white-top",{
    scrollTrigger:{
        trigger: "#fourth",
        start: "top center",
        scrub: true,
        duration:20
    },
    scale: 1.5, 
})
gsap.to("#white-top",{
    scrollTrigger:{
        trigger: ".sun",
        start: "top center",
        scrub: true,
        duration:20
    },
    y: 250, 
})
gsap.to("#front",{
    scrollTrigger:{
        trigger: "#fourth",
        start: "bottom bottom",
        scrub: true,
        duration:30
    },
    y: 200
})