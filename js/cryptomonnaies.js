sepa1 = document.querySelector(".title1");
sepa2 = document.querySelector(".title2");
sepa3 = document.querySelector(".title3");
sepa4 = document.querySelector(".title4");
sepa5 = document.querySelector(".title5");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 250) {
    sepa1.classList.remove("separClose");
    sepa1.classList.add("separOpen");
  }
  if (window.scrollY < 200) {
    sepa1.classList.remove("separOpen");
    sepa1.classList.add("separClose");
  }


  if (window.scrollY > 780) {
    sepa2.classList.remove("separClose");
    sepa2.classList.add("separOpen");
  }
  if (window.scrollY < 730) {
    sepa2.classList.remove("separOpen");
    sepa2.classList.add("separClose");
  }


  if (window.scrollY > 1400) {
    sepa3.classList.remove("separClose");
    sepa3.classList.add("separOpen");
  }
  if (window.scrollY < 1350) {
    sepa3.classList.remove("separOpen");
    sepa3.classList.add("separClose");
  }


  if (window.scrollY > 2300) {
    sepa4.classList.remove("separClose");
    sepa4.classList.add("separOpen");
  }
  if (window.scrollY < 2250) {
    sepa4.classList.remove("separOpen");
    sepa4.classList.add("separClose");
  }


  if (window.scrollY > 3750) {
    sepa5.classList.remove("separClose");
    sepa5.classList.add("separOpen");
  }
  if (window.scrollY < 3700) {
    sepa5.classList.remove("separOpen");
    sepa5.classList.add("separClose");
  }
});
