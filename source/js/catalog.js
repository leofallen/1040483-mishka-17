catalogWrapper.addEventListener("click", function(evt) {
  if (evt.target.classList.contains("pay-link")) {
    payClick(evt)
  }
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
