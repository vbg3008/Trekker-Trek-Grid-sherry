let opener = document.querySelector("#opener");
let links = document.querySelector("#links");

opener.addEventListener("click", () => {
  // links.classList.add("open-menu")
  links.classList.contains("open-menu")
    ? links.classList.remove("open-menu")
    : links.classList.add("open-menu");
});

var tl = gsap.timeline();

tl.from("nav", {
  y: -200,
  opacity: 0,
  duration: 0.4,
});
tl.from("nav .links ul li", {
  y: -200,
  opacity: 0,
  duration: 0.4,
  stagger:0.1
});




tl.from('.container-1 .heading , .container-1 .para , .container-1 .btn ',{
  x:"-50%",
  opacity:0, 
  
})
tl.to('.container-1 .heading , .container-1 .para , .container-1 .btn ',{
  x:0,
  opacity:1,
  duration:0.6, 
})

tl.from('.container-1 .image-flex ',{
  x:"50%",
  opacity:0, 
  
})
tl.to('.container-1 .image-flex ',{
  x:0,
  opacity:1,
  duration:1, 
})
 