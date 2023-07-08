// window.addEventListener("scroll", zoomOnScroll);

// function zoomOnScroll() {
//   var zoomElement = document.querySelector(".card");
//   var zoomElementTwo = document.querySelector(".skills-section");
//   var elementTop = zoomElementTwo.getBoundingClientRect().top;
//   var elementBotton = zoomElementTwo.getBoundingClientRect().bottom;
//   var animateIn = document.querySelector("skills-col02");
//   var containerTop = zoomElement.getBoundingClientRect().top;
//   var containerBottom = zoomElement.getBoundingClientRect().bottom;

//   // First Animation
//   if (containerTop < window.innerHeight && containerBottom >= 0) {
//     zoomElement.classList.remove("zoomIn");
//   } else {
//     zoomElement.classList.add("zoomIn");
//   }
//   // Next Animation

//   if (elementTop < window.innerHeight && elementBotton >= 0) {
//     animateIn.classList.remove("animate");
//   } else {
//     animateIn.classList.add("animate");
//   }
// }
