var headerToggleOpen = document.querySelector(".page-header__toggle");
var headerToggleClose = document.querySelector(".page-header__toggle-close");
var mainNavMenu = document.querySelector(".main-nav");
var menuToggle = document.querySelector(".page-header__toggle");
var viewport = document.documentElement.clientWidth;
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var pay = document.querySelector(".pay-link");
var catalogWrapper = document.querySelector(".page-wrapper--catalog");
var topProductBtn = document.querySelector(".top-product__button");
var modalBtn = document.querySelector(".modal__button");

var payClick = function(evt) {
  evt.preventDefault();
  modal.classList.remove("display-none");
  modal.classList.add("modal--show");
  overlay.classList.remove("display-none");
};

var modalClose = function(evt) {
  modal.classList.add("display-none");
  modal.classList.remove("modal--show");
  overlay.classList.add("display-none");
}

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

overlay.addEventListener("click", function(){
  modal.classList.add("display-none");
  modal.classList.remove("modal--show");
  overlay.classList.add("display-none");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalClose();
  }
});

modalBtn.addEventListener("click", function(evt) {
    modalClose()
})
