var headerToggleOpen = document.querySelector(".page-header__toggle");
var headerToggleClose = document.querySelector(".page-header__toggle-close");
var mainNavMenu = document.querySelector(".main-nav");
var menuToggle = document.querySelector(".page-header__toggle");

mainNavMenu.classList.add("display-none");
menuToggle.classList.remove("display-none");

headerToggleOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    headerToggleOpen.classList.toggle("page-header__toggle-close");
    mainNavMenu.classList.toggle("display-none");

});


