sepa1 = document.querySelector(".title1");
sepa2 = document.querySelector(".title2");
bitcoin = document.querySelector(".bitcoinImg");
blockchain = document.querySelector(".blockchainImg");
body = document.querySelector("body");
centerLoad = document.querySelector(".centerLoad");
spinnerOFF = document.querySelector(".spinnerOFF");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    sepa1.classList.remove("separClose");
    sepa1.classList.add("separOpen");
  }

  if (window.scrollY < 100) {
    sepa1.classList.remove("separOpen");
    sepa1.classList.add("separClose");
  }

  if (window.scrollY > 1100) {
    sepa2.classList.remove("separClose");
    sepa2.classList.add("separOpen");
  }

  if (window.scrollY < 1050) {
    sepa2.classList.remove("separOpen");
    sepa2.classList.add("separClose");
  }

});

x = 713;
bitcoin.style.setProperty("--x", x + "px");

window.addEventListener("scroll", () => {
  mx = x - (window.scrollY - x);
  if ((window.scrollY > 713) & (window.scrollY < 1053)) {
    bitcoin.style.setProperty("--x", mx + "px");
  }
});

window.addEventListener("scroll", () => {
  mx = window.scrollY - x;
  if ((window.scrollY > 713) & (window.scrollY < 1053)) {
    blockchain.style.setProperty("--x", mx + "px");
  }
});




