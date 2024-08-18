
const t1=gsap.timeline();

t1.to(".page1-img img",{
  scale:1.2,
  duration:1,
  opacity:1,
})
t1.from(".page1-headings >*",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.5,
})

gsap.from(".page2-data >*",{
  y:50,
  duration:2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".page2",
    start:"top 50%",
    end:"top 10%",
    scrub:3,
    // markers:true,
    once:true,
  },
  stagger:0.6,
})
gsap.from(".page3 h1",{
  y:-50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    scroller:"body",
    trigger:".page3",
    start:"top 60%",
    end:"top 50%",
    scrub:3,
    // markers:true,
    once:true,
  }
})
gsap.from(".page3 p",{
  y:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    scroller:"body",
    trigger:".page3",
    start:"top 60%",
    end:"top 50%",
    scrub:3,
    // markers:true,
    once:true,
  }
})
gsap.from(".page3-main-left",{
  x:-200,
  opacity:0,
  duration:1,
  scrollTrigger:{
    scroller:"body",
    trigger:".page3",
    start:"top 40%",
    end:"top 35%",
    markers:true,
    scrub:2,
    once:true,
  }
})
gsap.from(".page3-main-right",{
  x:200,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    scroller:"body",
    trigger:".page3",
    start:"top 40%",
    end:"top 35%",
    // markers:true,
    scrub:1,
    once:true,
  }
})
const pge4_tl = gsap.timeline();

    pge4_tl.from(".page4-box", {
      // x:"-50vw",
      height: "0%",
      // opacity:0,
      top: "40%",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        // markers:true,
        start: "top 20%",
        end: "top 15%",
        scrub: 3,
        once:true,
        onEnter: () => {
          // Once the scroll trigger is activated, play the rest of the timeline
          pge4_tl.play();
        },
      },
    });
    // Pause the timeline initially so that it only starts after the first scroll trigger
    pge4_tl.pause();
    pge4_tl.from(".page4-box p:nth-child(1)", {
      x: 500,
      opacity:0,
      duration: 0.4,
    });
    pge4_tl.from(".page4-box h1", {
      y: 50,
      opacity: 0,
      duration: 0.4,
    });
    
    pge4_tl.from(".page4-box p:nth-child(3)", {
      x: 500,
      opacity:0,
      duration: 0.4,
    });
    pge4_tl.from(".page4-box p:nth-child(4)", {
      x: 500,
      opacity:0,
      duration: 0.4,
    });
    pge4_tl.from(".page4-box p:nth-child(5)", {
      x: 500,
      opacity:0,
      duration: 0.4,
    });
    pge4_tl.from(".page4-box p:nth-child(6)", {
      x: 500,
      opacity:0,
      duration: 0.4,
    });
    gsap.from(".page5-bottom", {
      display: "none",
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page5-top",
        // markers: true,
        start: "bottom 1%",
        end: "bottom 0%",
        scrub: 3,
        pin: true,
      },
    });
    
    function bookingStats(){
      
      document.addEventListener('DOMContentLoaded', () => {
        gsap.registerPlugin(ScrollTrigger);
    
        const bookingTarget = { val: 0 };
        const customerTarget = { val: 0 };
    
        // Animation for bookings
        const bookingTween = gsap.to(bookingTarget, {
            val: 100,
            duration: 5,
            ease: 'power1.out',
            paused: true,
            onUpdate: () => {
                document.getElementById('bookings').innerText = `${Math.floor(bookingTarget.val)}+`;
            },
        });
    
        // Animation for customers
        const customerTween = gsap.to(customerTarget, {
            val: 150,
            duration: 5,
            ease: 'power1.out',
            paused: true,
            onUpdate: () => {
                document.getElementById('customers').innerText = `${Math.floor(customerTarget.val)}+`;
            },
        });
    
        // Setup ScrollTrigger
        const trigger = ScrollTrigger.create({
            trigger: '.page5-top',
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1, // Adjust this value if needed
            onEnter: () => {
                bookingTween.play();
                customerTween.play();
            },
            onLeaveBack: () => {
                bookingTween.reverse();
                customerTween.reverse();
            },
            once: true,
        });
    
        // Cleanup ScrollTrigger and tweens on page unload
        window.addEventListener('beforeunload', () => {
            trigger.kill();
            bookingTween.kill();
            customerTween.kill();
        });
    });
  }
  bookingStats();

  
// Smooth scroll to section
function handleScroll(event, id) {
  event.preventDefault();
  const targetElement = document.getElementById(id);
  if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}
// Toggle menu visibility
function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('open');
}
    
    
  
  
  
  