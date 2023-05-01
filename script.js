let timer = document.getElementsByClassName("deal-timer")[0];
setInterval (()=>{
            let d = new Date();
timer.innerHTML = "Sale Ends in  "+ d.getHours() +"<p>H</p> : " +d.getMinutes()+"<p>M</p> : "+d.getSeconds()+ "<p>s</p>" ;
},1000)

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () =>{
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener('click',()=>toggleNavbar());