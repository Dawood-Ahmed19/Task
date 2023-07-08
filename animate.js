window.addEventListener("scroll", onScroll);

function onScroll() {
  var rotateElement = document.querySelector(".rotationalImage");
  var elementTop = document.querySelector(".portfolio--section");
  var rotatingImage = document.querySelector(".rotateAnimation");
  var sectionTop = document.querySelector(".second--section");
  var topContainer = sectionTop.getBoundingClientRect().top;
  var bottomContainer = sectionTop.getBoundingClientRect().bottom;
  var containerTop = elementTop.getBoundingClientRect().top;
  var containerBottom = elementTop.getBoundingClientRect().bottom;

  // First Animation
  if (containerTop < window.innerHeight && containerBottom >= 0) {
    rotateElement.classList.add("activeImage");
  } else {
    rotateElement.classList.remove("activeImage");
  }

  if (topContainer < window.innerHeight && bottomContainer >= 0) {
    rotatingImage.classList.add("activeAnimation");
  } else {
    rotatingImage.classList.remove("activeAnimation");
  }
  // Next Animation
}
