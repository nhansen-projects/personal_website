//  << eventlistener for animated hamburger icon >>
// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => { menuBtn.classList.toggle('open') })



// function hbMenu() {
//     var x = document.getElementById("hb-nav");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }
/*
document.getElementsById("icon").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("hb-nav").classList.toggle("show");
}
*/

function myFunction() {
    const element = document.getElementById("nav-tablet-mobile");
    element.classList.toggle("show");
    console.count("Toggle")
}