topProductBtn.addEventListener("click", payClick);

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
