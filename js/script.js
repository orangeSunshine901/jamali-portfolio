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
          videoOne.load()

        }},
      onEnterBack: () => videoOne.play()
  
    }
  })
  const videoTwo = document.getElementById("man-cooking-video")
  const videoTwoMobile = document.getElementById("man-cooking-video-mobile")

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

  gsap.to(".contact-section", {
    scrollTrigger:{
      trigger: ".contact-section",
      start: "top 10%",
      onEnter: () => videoThree.play()
  
    }
  })

})
