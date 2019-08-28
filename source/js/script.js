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
