window.addEventListener("scroll", onScroll);

function onScroll() {
  var rotateElement = document.querySelector(".rotationalImage");
  var elementTop = document.querySelector(".portfolio--section");
  var containerTop = elementTop.getBoundingClientRect().top;
  var containerBottom = elementTop.getBoundingClientRect().bottom;

  // First Animation
  if (containerTop < window.innerHeight && containerBottom >= 0) {
    rotateElement.classList.add("activeImage");
  } else {
    rotateElement.classList.remove("activeImage");
  }
  // Next Animation
}

console.log(onScroll());
