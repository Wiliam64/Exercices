let canvas = document.createElement('canvas');
canvas.style.border = "solid black 1px";
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");
let img = new Image();
img.src = "./pomme.png";

canvas.width  = document.body.offsetWidth;
canvas.height = innerHeight;

canvas.addEventListener('click', () => {
    ctx.drawImage(img, 790, 400);
})