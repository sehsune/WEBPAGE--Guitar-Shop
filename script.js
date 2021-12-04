let navbar = document.querySelector(".navbar");
let shopContainer = document.querySelector(".shop-contanier");
const menuBtn = document.querySelector("#menu-btn");
const cartBtn = document.querySelector("#cart-btn");
const searchBtn = document.querySelector("#search-btn")
const searchForm = document.querySelector(".search-form");

function toggleMenu (){
navbar.classList.toggle("active")
shopContainer.classList.remove("active")
searchForm.classList.remove("active")
}

function toggleCart (){
 shopContainer.classList.toggle("active")
 navbar.classList.remove("active")
 searchForm.classList.remove("active")
 }

 function toggleSearch (){
 searchForm.classList.toggle("active")
 navbar.classList.remove("active")
 shopContainer.classList.remove("active")
 }



 function windowScroll (){
    navbar.classList.remove("active")
    shopContainer.classList.remove("active")
    searchForm.classList.remove("active")
 }

menuBtn.addEventListener("click", toggleMenu)
cartBtn.addEventListener("click", toggleCart)
searchBtn.addEventListener("click", toggleSearch)
window.addEventListener("scroll", windowScroll)
