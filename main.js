for (let i = 1; i < 7; i++) {
  const clc = document.querySelector(".c" + i);
  const arr = document.querySelector(".a" + i);
  const left_container = document.querySelector(".l" + i);

  function classToggle() {
    arr.classList.toggle("active_arr");
    left_container.classList.toggle("active");
    left_container.classList.toggle("off");
  }

  arr.addEventListener("click", () => {
    classToggle();
  });

  clc.addEventListener("click", () => {
    classToggle();
  });
}
