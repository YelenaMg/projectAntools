import "./sass/main.scss";

import "./assets/bg.jpg";

document.querySelector(".c-hamburger").addEventListener("click", function (e) {
  console.log(444);
  e.preventDefault();
  this.classList.add("is-active");
});

console.log(44444444444);
