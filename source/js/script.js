var headerToggleOpen = document.querySelector(".page-header__toggle");
var headerToggleClose = document.querySelector(".page-header__toggle-close");
var mainNavMenu = document.querySelector(".main-nav");
var menuToggle = document.querySelector(".page-header__toggle");
var viewport = document.documentElement.clientWidth;
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var pay = document.querySelector(".pay-link");
var catalogWrapper = document.querySelector(".page-wrapper--catalog");

if (viewport < 768) {
  mainNavMenu.classList.add("display-none");
  menuToggle.classList.remove("display-none");
}

window.addEventListener("resize", function() {
  viewport = document.documentElement.clientWidth;

  if (viewport >= 768) {
    mainNavMenu.classList.remove("display-none");
    menuToggle.classList.add("display-none");
} else {
  mainNavMenu.classList.add("display-none");
  menuToggle.classList.remove("display-none");
}
});

headerToggleOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  headerToggleOpen.classList.toggle("page-header__toggle-close");
  mainNavMenu.classList.toggle("display-none");
});

// catalogWrapper.addEventListener("click", function(evt) {
//   if (evt.target.classList.contains === "pay-link") {
//     evt.preventDefault();
//     modal.classList.toggle("display-none");
//     modal.classList.toggle("modal--show");
//     overlay.classList.toggle("display-none");
//   }
// });

pay.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.toggle("display-none");
  modal.classList.toggle("modal--show");
  overlay.classList.toggle("display-none");
});

overlay.addEventListener("click", function(){
  modal.classList.toggle("display-none");
  modal.classList.toggle("modal--show");
  overlay.classList.toggle("display-none");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.classList.toggle("display-none");
    modal.classList.toggle("modal--show");
    overlay.classList.toggle("display-none");
  }
});
