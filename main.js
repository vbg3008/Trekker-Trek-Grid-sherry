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
  stagger: 0.1,
});

tl.from([".container-1 .heading", ".container-1 .para", ".container-1 .btn"], {
  x: "-50%",
  opacity: 0,
  duration: 0.4, // Add duration to control speed
  stagger: 0.2, // Adds a delay between each element's animation
  ease: "power2.out" // Smooth easing
});

tl.from(".container-1 .image-flex", {
  x: "50%",
  opacity: 0,
  duration: 0.4, // Control animation speed
  ease: "power2.out" // Smooth easing
});

// for top destinatons


gsap.from(".container-2 .cards .card:nth-child(1), .container-2 .cards .card:nth-child(2)", {
  scrollTrigger: {
    trigger: ".container-2 .cards .card:nth-child(1)", 
    start: "top 80%", 
    end: "top 50%",
    toggleActions: "play none none none",
    scrub: 1,
    markers: true
  },
  x: -200,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  ease: "power2.out"
});

gsap.from(".container-2 .cards .card:nth-child(3), .container-2 .cards .card:nth-child(4)", {
  scrollTrigger: {
    trigger: ".container-2 .cards .card:nth-child(3)", 
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none none",
    scrub: 1,
    markers: true
  },
  x: 200,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  ease: "power2.out"
});



