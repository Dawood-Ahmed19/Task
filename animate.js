window.addEventListener("scroll", zoomOnScroll);

function zoomOnScroll() {
  var zoomElement = document.querySelector(".card");
  var zoomElementTwo = document.querySelector(".card02");
  var containerTop = zoomElement.getBoundingClientRect().top;
  var containerBottom = zoomElement.getBoundingClientRect().bottom;

  // Check if the container is in the viewport
  if (containerTop < window.innerHeight && containerBottom >= 0) {
    zoomElement.classList.remove("zoomIn");
  } else {
    zoomElement.classList.add("zoomIn");
  }
}
