//Parallax 
let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

//Slider 
var slider = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true,
    pagination: false,
});

//Slider Green Sock
slider.on("slideChange", function() {
    gsap.to(".slide-year span", 0.2, {
      x: "-100px"
    });
    gsap.to(".slide-topic span", 0.2, {
      x: "-100px"
    });
    gsap.to(".slide-detail span", 0.5, {
      x: "-1000px"
    });
    gsap.to(".slide-detail-facts div", 0.5, {
      x: "-1000px"
    });
    gsap.to(".swiper-slide-active", 0.5, {
      scale: 0.85
    });
    gsap.to(".swiper-slide .slide-img", 1, {
      rotation: 20
    });
  });
  
  slider.on("slideChangeTransitionEnd", function() {
    gsap.to(".swiper-slide .slide-img", 1, {
      rotation: 10
    });
    gsap.to(".slide-year span", 0.2, {
      x: 0,
      delay: 0.1
    });
    gsap.to(".slide-year span", 0, {
      x: "100px"
    });
  
    gsap.to(".slide-topic span", 0.2, {
      x: 0
    });
    gsap.to(".slide-topic span", 0, {
      x: "100px"
    });
  
    gsap.to(".slide-detail span", 0.2, {
      x: 0
    });
  
    gsap.to(".slide-detail-facts div", 0.5, {
      x: 0
    });
  
    gsap.to(".swiper-slide-active", 0.5, {
      scale: 1,
      ease: Power4.easeOut
    });
  
    gsap.to(".swiper-slide-active .slide-year", 0, {
      autoAlpha: 1
    });
    gsap.to(".swiper-slide-active .slide-topic", 0, {
      autoAlpha: 1
    });
  
    gsap.to(".swiper-slide-next .slide-year", 0, {
      autoAlpha: 0
    });
    gsap.to(".swiper-slide-prev .slide-year", 0, {
      autoAlpha: 0
    });
  
    gsap.to(".swiper-slide-next .slide-topic", 0, {
      autoAlpha: 0
    });
    gsap.to(".swiper-slide-prev .slide-topic", 0, {
      autoAlpha: 0
    });
  });
  
  gsap.to(".rockbg1", 2, {
    y: 12,
    repeat: -1,
    yoyo: true,
    delay: 0
  });
  
  gsap.to(".swiper-slide-next .slide-year", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-year", 0, {
    autoAlpha: 0
  });
  
  gsap.to(".swiper-slide-next .slide-topic", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-topic", 0, {
    autoAlpha: 0
  });
  
  gsap.to(".swiper-slide", 0, {
    scale: 0.85
  });
  
  gsap.to(".swiper-slide-active", 0, {
    scale: 1
  });


