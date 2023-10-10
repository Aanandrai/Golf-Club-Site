var crsr=document.querySelector(".curser")
var blr=document.querySelector(".curser-blur")
document.addEventListener("mousemove",function(dets){
    // console.log(dets.y),
    crsr.style.left=dets.x+10+"px",
    crsr.style.top=dets.y+15+"px"
    blr.style.left=dets.x-150 +"px",
    blr.style.top=dets.y-150+"px"
})


gsap.to(".navbar",{
    backgroundColor:"#000",
    duration:1,

    height:"11% ",
   scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -12%",
        scrub:1,

    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        start:"top -25%",
        end:"top -80%",
        // markers:true,
        scrub:2,

    }
})

var h4all=document.querySelectorAll(".navbar h4 ")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border= "1px solid #fff" 
        crsr.style.backgroundColor="transparent"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid  #95C11E"
        crsr.style.backgroundColor=" #95C11E"
    })
})

gsap.from(".about-us img, .about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,

    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,

    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,

    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 30% ",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,

    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 30% ",
        scrub:3
    }
})

gsap.from(".page4 h1",{
    y:20,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 90%",
        scrub:2

    }
})