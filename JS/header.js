window.addEventListener("scroll", function() {
  let header = document.querySelector("header");
  if (window.scrollY > 50) { 
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});

document.getElementById("toggle-btn").addEventListener("click", function () {
    let header = document.querySelector(".mob-header");
    if (header.style.height === "410px") {
        header.style.height = "100px";
    } else {
        header.style.height = "410px";
    }
});
