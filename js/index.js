hamburger = document.querySelector(".clickHam");
depliant = document.querySelector(".depliantNav");


x = 0;

hamburger.addEventListener("click", () =>{
    x +=1;
    depliant.classList.toggle("depliantNavClose");

});


