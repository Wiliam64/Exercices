//Animation

let horloge = document.querySelector("article")
function anim (){
    horloge.classList.toggle("anim");
    alert("Ready ?")
};

//Récupération des aiguilles

let hours = document.getElementById('heure');
let min = document.getElementById('minute');
let sec = document.getElementById('seconde');
console.log(hours, min, sec);

//Fonction

function blabla(){
    let date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    console.log(heure, minute, seconde);
    
    hours.style.transform = 'rotate(' + (((heure/12)*360) + ((minute/60)*30)) + 'deg)';
    min.style.transform = 'rotate(' + (((minute/60)*360) + ((seconde/60)*6) ) + 'deg)';
    sec.style.transform = 'rotate(' + ((seconde/60)*360) + 'deg)';
};

setInterval(blabla,1000);