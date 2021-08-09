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

// const observer = new IntersectionObserver((entries) => {
//   // Loop over the entries
//   entries.forEach((entry) => {
//     // If the element is visible
//     // console.log(entry.isIntersecting);
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add("animate__slideInLeft");
//     }
//   });
// });

// observer.observe(document.querySelector(".animate-left"));
// observer.observe(document.querySelector(".animate-right"));
