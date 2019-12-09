// let dessin = document.createElement('canvas')
// dessin.id = "dessin"
// document.body.appendChild(dessin)
// dessin.style.height = "500px"
// dessin.style.width = "700px"
// dessin.style.border = "black 1px solid"

let imag = new Image
imag.src = "red-fox-1139351_960_720.jpg"
document.body.appendChild(imag)


imag.addEventListener('click', function(){

    let image  = document.querySelector("img");
    let canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    
    canvas.width  = image.width;
    canvas.height = image.height;
    
    let context = canvas.getContext("2d");
    
    context.drawImage(image, 10, 10);
})

