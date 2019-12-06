// let m1 = document.getElementById("menu1");
// let w = function anim() {
//     document.getElementById("sousmenu1").style.opacity = "1";
//     document.getElementById("sousmenu1").style.visibility = "visible"
// }
// m1.addEventListener("click", w)
// let leave1 = function () {
//     document.getElementById("sousmenu1").style.opacity = "0";
//     document.getElementById("sousmenu1").style.visibility = "hidden"
// }
// m1.onmouseleave = leave1


// let m2 = document.getElementById("menu2");
// let x = function anim() {
//     document.getElementById("sousmenu2").style.opacity = "1"; 
//     document.getElementById("sousmenu2").style.visibility = "visible";
// }
// m2.addEventListener("click", x)
// let leave2 = function () { 
//     document.getElementById("sousmenu2").style.opacity = "0"; 
//     document.getElementById("sousmenu2").style.visibility = "hidden" ;
// }
// m2.onmouseleave = leave2;


// let m3 = document.getElementById("menu3");
// let y = function anim() {
//     document.getElementById("sousmenu3").style.opacity = "1"; 
//     document.getElementById("sousmenu3").style.visibility = "visible";
// }
// m3.addEventListener("click", y)
// let leave3 = function () { 
//     document.getElementById("sousmenu3").style.opacity = "0"; 
//     document.getElementById("sousmenu3").style.visibility = "hidden"; 
// }
// m3.onmouseleave = leave3


// let m4 = document.getElementById("menu4")
// let z = function anim() {
//     document.getElementById("sousmenu4").style.opacity = "1"; 
//     document.getElementById("sousmenu4").style.visibility = "visible";
// }
// m4.addEventListener("click", z)
// let leave4 = function () { 
//     document.getElementById("sousmenu4").style.opacity = "0"; 
//     document.getElementById("sousmenu4").style.visibility = "hidden";
// }
// m4.onmouseleave = leave4

let menu = document.querySelectorAll("a");
let smenu = document.querySelectorAll("nav li ul")
console.log(menu);
for(let i = 0; i < menu.length; i = i + 1){
    let anim = function anim(){
        smenu[i].classList.toggle('class')
    }
    menu[i].addEventListener('click', anim)
};