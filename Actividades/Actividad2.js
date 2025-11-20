gsap.registerPlugin(ScrollTrigger);

gsap.from('#card-1',{
    scrollTrigger:{
        trigger:"header",
        start:"50% 50%",
        end:"bottom 20%",
        scrub:1,
        markers:false,
    },
    opacity:0
})

gsap.fromTo('#card-2',
    {
        x: -300
    },
    {
         scrollTrigger:{
        trigger:"header",
        start:"50% 50%",
        end:"bottom 20%",
        scrub:1,
        markers:false,
    },
        x: 300
    }
)

gsap.fromTo('#card-3',
    {
        x: "100vw"
    },
    {
         scrollTrigger:{
        trigger:"#card-1",
        start:"50% 50%",
        end:"bottom 20%",
        scrub:1,
        markers:false,
    },
        x: "50vw"
    }
)