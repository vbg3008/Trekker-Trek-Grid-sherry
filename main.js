let opener = document.querySelector("#opener");
let links = document.querySelector("#links");


opener.addEventListener("click", () => {
  // links.classList.add("open-menu")
  links.classList.contains("open-menu")
    ? links.classList.remove("open-menu")
    : links.classList.add("open-menu");
});

