window.addEventListener("DOMContentLoaded", ()=>{
  
  const videoOne = document.getElementById("man-and-the-mountain-video")
  videoOne.load()

  

  gsap.to(".man-and-the-mountain", {
    scrollTrigger:{
      trigger: ".man-and-the-mountain",
      start: "top 70%",
      end: "bottom top",
      onEnter: () => videoOne.play(),
      onLeave: () => {
        if(innerWidth > "500" ){
          videoOne.stop()

        }},
      onEnterBack: () => videoOne.play()
  
    }
  })
  const videoTwo = document.getElementById("man-cooking-video")
  const videoTwoMobile = document.getElementById("man-cooking-video-mobile")
  videoTwo.load()
  gsap.to(".man-cooking-his-ideas", {
    scrollTrigger:{
      trigger: ".man-cooking-his-ideas",
      start: "top 70%",
      end: "bottom 80%",
      onEnter: () => videoTwo.play(),
      onLeave: () => {
        if(innerWidth > "500" ){
          videoTwo.pause()
        }},
      onEnterBack: () => videoTwo.play()
  
    }
  })
  gsap.to(".mchi-mobile", {
    scrollTrigger:{
      trigger: ".mchi-mobile",
      start: "top 70%",
      end: "bottom 80%",
      onEnter: () => videoTwoMobile.play(),
      onLeave: () => {
        if(innerWidth > "500" ){
          videoTwoMobile.pause()
        }},
      onEnterBack: () => videoTwoMobile.play()
  
    }
  })

  const videoThree = document.getElementById("cool-cat")
  videoThree.load()
  gsap.to(".contact-section", {
    scrollTrigger:{
      trigger: ".contact-section",
      start: "top 70%",
      onEnter: () => videoThree.play()
  
    }
  })

  

})

window.addEventListener("load", () => {

  const  animation = ()=>{

    const textData = "My Portfolio";
    let currentWord = "";
    let text = "";
    let count = 0;
    let index = 0;
    let speed = 100;
    let isDeleting = false;
    
      (type = () => {
        // if (count === textData.length) {
        //   count = 0;
        // }
      
        currentWord = textData;
      
        if (!isDeleting) {
          text = currentWord.slice(0, ++index);
      
          if (text.length === currentWord.length) {
            isDeleting = false;
            setTimeout(()=> {
              document.querySelector("#intro-headline").classList.remove("type-writer")
            },3000)
          }
        } else {
          speed = 150;
          text = currentWord.slice(0, --index);
      
          if (text.length === 0) {
            isDeleting = false;
            count++;
            speed = 400;
          }
        }
      
        document.querySelector(".type-writer").textContent = text;
      
      
        setTimeout(() => type(), speed);
      })();
    }

  gsap.timeline()
      .add(animation())
      .from("#writer-text",{opacity:0, ease: "power2.out", delay: 4})
      .from("#developer-text",{opacity:0, ease: "power2.out"})
      .from(".shadow-and-jamali", {opacity:0, ease: "power0.out"})
      .from(".lens-cap",{xPercent:50, ease: "power2.out"})
      .from(".copyright",{opacity:0, ease: "power2.out", duration: 0.8})
      .from(".lens-cap-mobile",{xPercent:50, ease: "power2.out"})
      .from(".mobile-copyright",{opacity:0, ease: "power2.out"})
})