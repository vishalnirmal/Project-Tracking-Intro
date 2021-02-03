var menu = document.querySelector(".icon-hamburger");
var close = document.querySelector(".icon-close");
var nav = menu.parentElement;
menu.addEventListener("click", ()=>{
    nav.classList.add("active"); 
});
close.addEventListener("click", ()=>{
    nav.classList.remove("active");
});