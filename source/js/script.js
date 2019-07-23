var headerToggleOpen = document.querySelector(".page-header__toggle");
var headerToggleClose = document.querySelector(".page-header__toggle-close");
var mainNavMenu = document.querySelector(".main-nav__list");

headerToggleOpen.addEventListener("click", function(evt) {
  if (headerToggleOpen) {
    evt.preventDefault();
    headerToggleOpen.classList.add("page-header__toggle-close");
    mainNavMenu.classList.remove("main-nav__list--none");
  } else {
    evt.preventDefault();
    headerToggleClose.classList.remove("page-header__toggle-close");
  }
});
