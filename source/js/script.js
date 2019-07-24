var headerToggleOpen = document.querySelector(".page-header__toggle");
var headerToggleClose = document.querySelector(".page-header__toggle-close");
var mainNavMenu = document.querySelector(".main-nav__list");

headerToggleOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    headerToggleOpen.classList.toggle("page-header__toggle-close");
    mainNavMenu.classList.toggle("main-nav__list--none");

});
