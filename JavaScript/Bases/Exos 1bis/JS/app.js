let deg = 0;
let anim = function () {
    deg ++;
    this.style.transform = "rotate(" + 360*deg + "deg) ";
    this.style.transition ="linear";
    this.style.transitionDuration = "0.5s";
}
    let monImage = new Image(1500, 900);
    document.body.appendChild(monImage);
    monImage.src = "https://cdn.pixabay.com/photo/2014/10/16/09/15/lens-490806_960_720.jpg";
    monImage.addEventListener("click", anim);