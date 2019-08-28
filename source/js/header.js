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
