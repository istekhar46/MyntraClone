let timer = document.getElementsByClassName("deal-timer")[0];
setInterval(() => {
  let d = new Date();
  let hours = 23 - d.getHours();
  let minutes = 59 - d.getMinutes();
  let seconds = 59 - d.getSeconds();

  timer.innerHTML =
    "Sale Ends in " +
    hours +
    "<p>H</p> : " +
    minutes +
    "<p>M</p> : " +
    seconds +
    "<p>s</p>";
}, 1000);

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
