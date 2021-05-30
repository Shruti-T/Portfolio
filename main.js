const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click", () => {
  classToggle();
});

clc.addEventListener("click", () => {
  classToggle();
});

function classToggle() {
  arr.classList.toggle("active_arr");
  left_container.classList.toggle("active");
  left_container.classList.toggle("off");
}
