window.addEventListener("DOMContentLoaded", ()=>{
  const video = document.getElementById("man-and-the-mountain-video")
  video.load()

  gsap.to(".man-and-the-mountain", {
    scrollTrigger:{
      trigger: ".man-and-the-mountain",
      start: "top 70%",
      end: "bottom top",
      onEnter: () => video.play(),
      onLeave: () => {
        if(innerWidth > "500" ){
          video.load()
        }},
      onEnterBack: () => video.play()
  
    }
  })

})
