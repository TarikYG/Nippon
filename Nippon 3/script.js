
let mybutton = document.getElementById("myBtn")
let nav = document.getElementById("navbar")
let navimg = document.getElementById("logoBtn")

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
    mybutton.style.display = "block";
    navimg.style.display = "block";
    nav.style.position = "fixed";
    nav.style.top = "0";

  } else {
    mybutton.style.display = "none";
    navimg.style.display = "none";
    nav.style.position = "relative";

  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navbar_menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
