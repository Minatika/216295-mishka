var link = document.querySelector(".btn--product-of-week");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".feedback-close");
var form = document.querySelector(".modal__size-list");

link.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

form.addEventListener("submit", function (e) {
  modal.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});
