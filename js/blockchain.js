sepa1 = document.querySelector(".title1");
sepa2 = document.querySelector(".title2");
sepa3 = document.querySelector(".title3");



window.addEventListener("scroll", () => {
    console.log(window.scrollY);
  if (window.scrollY > 200) {
    sepa1.classList.remove("separClose");
    sepa1.classList.add("separOpen");
  }

  if (window.scrollY < 150) {
    sepa1.classList.remove("separOpen");
    sepa1.classList.add("separClose");
  }
  if (window.scrollY > 1500) {
    sepa2.classList.remove("separClose");
    sepa2.classList.add("separOpen");
  }

  if (window.scrollY < 1450) {
    sepa2.classList.remove("separOpen");
    sepa2.classList.add("separClose");
  }
  if (window.scrollY > 2400) {
    sepa3.classList.remove("separClose");
    sepa3.classList.add("separOpen");
  }

  if (window.scrollY < 2350) {
    sepa3.classList.remove("separOpen");
    sepa3.classList.add("separClose");
  }
});
