const container = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

container.forEach((panel) => panel.addEventListener("click", toggleOpen));
container.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
