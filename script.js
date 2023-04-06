var tl = gsap.timeline();




tl
    .from(".nav-home",{
    opacity:0,
    y:-20,
    duration:1,
    })
    .from(".main-img-left h1",{
        opacity:0,
        x:-20,
        duration:1,
    })
    .from("#bird",{
        opacity:0,
        x:-20,
        duration:1,
    })

    .from(".main-img-left p",{
        opacity:0,
        x:-20,
        duration:1,
    })

    .from(".main-img-right img",{
        opacity:0,
        x:20,
        duration:1,
    })

    
        gsap.from(".features-all-img img",{
        scrollTrigger:{
            trigger:".features-all img",
            scroller:"body",
            // markers:true,
            start:"top 50%"
        },
        opacity:0,
        y:-20,
        duration:1,
    })
    gsap.from(".features-all h4",{
        scrollTrigger:{
            trigger:".features-all h4",
            scroller:"body",
            // markers:true,
            start:"top 65%"
        },
        opacity:0,
        y:-20,
        duration:1,
    })
    gsap.from(".features-all p",{
        scrollTrigger:{
            trigger:".features-all p",
            scroller:"body",
            // markers:true,
            start:"top 60%"
        },
        opacity:0,
        y:-20,
        duration:1,
    })

    // prodect start

    gsap.from(".prodects-all-zero img",{
        scrollTrigger:{
            trigger:".prodects-all-zero img",
            scroller:"body",
            // markers:true,
            start:"top 50%",
        },
        opacity:0,
        x:-50,
        duration:2,
    })
    gsap.from(".prodects-all-bottom-zero",{
        scrollTrigger:{
            trigger:".prodects-all-bottom-zero",
            scroller:"body",
            // markers:true,
            start:"top 76%",
        },
        opacity:0,
        x:50,
        duration:2,
    })

    gsap.from(".prodects-all-one img",{
        scrollTrigger:{
            trigger:".prodects-all-one img",
            scroller:"body",
            // markers:true,
            start:"top 50%"
        },
        opacity:0,
        x:50,
        duration:2,
    })
    gsap.from(".prodects-all-bottom-one",{
        scrollTrigger:{
            trigger:".prodects-all-bottom-one",
            scroller:"body",
            // markers:true,
            start:"top 76%"
        },
        opacity:0,
        x:-50,
        duration:2,
    })
    

    gsap.from(".prodects-all-two img",{
        scrollTrigger:{
            trigger:".prodects-all-two img",
            scroller:"body",
            // markers:true,
            start:"top 50%"
        },
        opacity:0,
        x:-50,
        duration:2,
    })
    gsap.from(".prodects-all-bottom-two",{
        scrollTrigger:{
            trigger:".prodects-all-bottom-two",
            scroller:"body",
            // markers:true,
            start:"top 76%"
        },
        opacity:0,
        x:50,
        duration:2,
    })
  
    // prodect end

    // main page team start

    gsap.from(".team h1",{
        scrollTrigger:{
            trigger:".team h1",
            scroller:"body",
            // markers:true,
            start:"top 50%",
        },
        opacity:0,
        y:-20,
        duration:2,
    })

    gsap.from(".team-all img",{
        scrollTrigger:{
            trigger:".team-all img",
            scroller:"body",
            // markers:true,
            start:"top 45%",
        },
        opacity:0,
        y:-20,
        duration:2,
    })

    gsap.from(".team-all h5",{
        scrollTrigger:{
            trigger:".team-all h5",
            scroller:"body",
            // markers:true,
            start:"top 70%",
        },
        opacity:0,
        y:-20,
        duration:2,
    })

    gsap.from(".team-all h6",{
        scrollTrigger:{
            trigger:".team-all h6",
            scroller:"body",
            // markers:true,
            start:"top 65%",
        },
        opacity:0,
        y:-20,
        duration:2,
    })

    // main page team end

    // fotter start

    gsap.from(".fotter",{
        scrollTrigger:{
            trigger:".fotter",
            scroller:"body",
            // markers:true,
            start:"top 65%",
        },
        opacity:0,
        y:20,
        duration:2,
    })
    
    // fotter end



    // pro animestion start

    var tlm = gsap.timeline();


    tlm
        .from(".nav-pro",{
        opacity:0,
        y:-20,
        duration:1,
        })
        .from("#top-img",{
            opacity:0,
            x:-50,
            duration:1,
        })
        .from("#bottom-img",{
            opacity:0,
            x:50,
            duration:1,
            delay:"-1"
        })
        .from(".contect-us-top h1",{
            opacity:0,
            y:-50,
            duration:1,
            delay:"-1"
        })

        gsap.from(".products-main-bottom img",{
            scrollTrigger:{
                trigger:".products-main-bottom img",
                scroller:"body",
                // markers:true,
                start:"top 55%",
            },
            opacity:0,
            scale:-1.1,
            duration:2,
        })

        gsap.from(".products-main a",{
            scrollTrigger:{
                trigger:".products-main a",
                scroller:"body",
                // markers:true,
                start:"top 75%",
            },
            opacity:0,
            y:-20,
            duration:1,
        })

    // pro animestion end

        // contect us animestion start

        gsap.from("iframe",{
            scrollTrigger:{
                trigger:"iframe",
                scroller:"body",
                // markers:true,
                start:"top 35%",
            },
            opacity:0,
            y:20,
            scale:1.1,
            duration:2,
        })


        gsap.from(".contact-ditel-all",{
            scrollTrigger:{
                trigger:".contact-ditel-all",
                scroller:"body",
                // markers:true,
                start:"top 55%",
            },
            opacity:0,
            y:20,
            scale:1.1,
            duration:2,
        })

        gsap.from(".contct-us-form",{
            scrollTrigger:{
                trigger:".contct-us-form",
                scroller:"body",
                // markers:true,
                start:"top 15%",
            },
            opacity:0,
            y:20,
            scale:1.1,
            duration:2,
        })

        // contect us animestion end

        // about us animestion start

        gsap.from(".about-us-ceo h6",{
            scrollTrigger:{
                trigger:".about-us-ceo h6",
                scroller:"body",
                // markers:true,
                start:"top 75%",
            },
            opacity:0,
            y:-20,
            duration:1,
        })

        gsap.from("#p",{
            scrollTrigger:{
                trigger:"#p",
                scroller:"body",
                // markers:true,
                start:"top 70%",
            },
            opacity:0,
            y:-20,
            duration:1,
        })

        gsap.from("#pp",{
            scrollTrigger:{
                trigger:"#pp",
                scroller:"body",
                // markers:true,
                start:"top 65%",
            },
            opacity:0,
            y:-20,
            duration:1,
        })       
        
        gsap.from(".about-us-ceo-bottom",{
            scrollTrigger:{
                trigger:".about-us-ceo-bottom",
                scroller:"body",
                // markers:true,
                start:"top 60%",
            },
            opacity:0,
            y:-20,
            duration:1,
        })


        gsap.from(".about-us-ceo-video",{
            scrollTrigger:{
                trigger:".about-us-ceo-video",
                scroller:"body",
                // markers:true,
                start:"top 35%",
            },
            opacity:0,
            y:20,
            scale:1.1,
            duration:2,
        })


        gsap.from(".about-us-ceo-chosse-h1 h1",{
            scrollTrigger:{
                trigger:".about-us-ceo-chosse-h1 h1",
                scroller:"body",
                // markers:true,
                start:"top 60%",
            },
            opacity:0,
            y:-20,
            duration:1,
        })

        gsap.from(".features-all-about-zero",{
            scrollTrigger:{
                trigger:".features-all-about-zero",
                scroller:"body",
                // markers:true,
                start:"top 50%",
            },
            opacity:0,
            x:-20,
            duration:1,
        })

        
        gsap.from("#zero-p",{
            scrollTrigger:{
                trigger:"#zero-p",
                scroller:"body",
                // markers:true,
                start:"top 64%",
            },
            opacity:0,
            x:20,
            duration:1,
        })

        gsap.from(".features-all-about-one",{
            scrollTrigger:{
                trigger:".features-all-about-one",
                scroller:"body",
                // markers:true,
                start:"top 50%",
            },
            opacity:0,
            x:20,
            duration:1,
        })

        
        gsap.from("#one-p",{
            scrollTrigger:{
                trigger:"#one-p",
                scroller:"body",
                // markers:true,
                start:"top 64%",
            },
            opacity:0,
            x:-20,
            duration:1,
        })

        gsap.from(".features-all-about-three",{
            scrollTrigger:{
                trigger:".features-all-about-three",
                scroller:"body",
                // markers:true,
                start:"top 50%",
            },
            opacity:0,
            x:-20,
            duration:1,
        })

        
        gsap.from("#three-p",{
            scrollTrigger:{
                trigger:"#three-p",
                scroller:"body",
                // markers:true,
                start:"top 64%",
            },
            opacity:0,
            x:20,
            duration:1,
        })


        gsap.from(".features-all-about-four",{
            scrollTrigger:{
                trigger:".features-all-about-four",
                scroller:"body",
                // markers:true,
                start:"top 50%",
            },
            opacity:0,
            x:20,
            duration:1,
        })

        
        gsap.from("#four-p",{
            scrollTrigger:{
                trigger:"#four-p",
                scroller:"body",
                // markers:true,
                start:"top 64%",
            },
            opacity:0,
            x:-20,
            duration:1,
        })

        // about us animestion end

