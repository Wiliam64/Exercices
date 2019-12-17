// class Canvas{
//     constructor(src,ctx){
//         this.img = src;
//         this.context = ctx;
//     }
//     dessiner(){
//         ctx.drawImage;
//     }
// }

// class Fruit{
//     constructor(src, x, y){
//         this.source = src;
//         this.x  = x;
//         this.y = y;
//     }
//     afficher(){
//         ctx.drawImage()
//     }
// }

class Canvas{
    constructor(h, l, el){
        this.h = h;
        this.l = l;
        this.el = el;
        this.dessineCanvas();
    }
    // Methode de création du canvas dans le DOM
    dessineCanvas(){
        this.c = document.createElement('canvas');
        this.c.width = this.l;
        this.c.height = this.h;
        this.ctx = this.c.getContext('2d');
        // console.log(this.ctx);
        this.el.appendChild(this.c);
    }
}

class Fruit{
    constructor(x, y, ctx){
        console.log("Fruit", ctx);
    }
}

let canvas2 = new Canvas('550px', '550px', document.querySelector("section"));
let fruit = new Fruit(50, 75, canvas2.ctx);