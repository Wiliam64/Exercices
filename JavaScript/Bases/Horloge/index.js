// let deg = 0;
// let anim = function () {
//     deg ++;
//     this.style.transform = "rotate(" + 360*deg + "deg) ";
//     this.style.transition = "linear";
//     this.style.transitionDuration = "0.5s";
//     this.style.borderRadius = "50%";
// }

let horloge = document.querySelector("article")
// horloge.addEventListener("click", anim);
horloge.addEventListener('click', function(){
    horloge.classList.toggle("anim");
});