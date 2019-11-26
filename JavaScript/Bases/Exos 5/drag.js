let cercle = document.querySelector('#cercle');
let balle = document.querySelector('#balle');

balle.addEventListener('dragstart', dragStart);
balle.addEventListener('dragend', dragEnd);

function dragStart() {
    console.log('start')
}

function dragEnd() {
    console.log('end')
}


cercle.addEventListener('drop', dragDrop)

function dragDrop(){
    console.log('oui');
    this.appendChild(balle)
}