
//Première Partie\\



//Colorer la div\\

document.getElementById('couleur').style.color = "orange"; //Ou .getElementsByClassName('') // Ou .querySelector\\



//Crée une deuxième Div\\

let hola = document.createElement('div');
hola.id = "color";
hola.textContent = "Holla"
document.getElementById("article").appendChild(hola)
document.getElementById('color').style.color = "orange"


//Modifier la position du text et aligner à gauche et à droite\\

document.getElementById('couleur').style.cssFloat = "left";
document.getElementById('color').style.textAlign = "right";


//Inverser le contenue des div\\

let temp1 = document.getElementById('couleur').innerHTML;
let temp2 = document.getElementById('color').innerHTML;

document.getElementById('couleur').innerHTML = temp2;
document.getElementById('color').innerHTML = temp1;





//Deuxième Partie\\





//Ajouter 1 article et 3 div dans cet article\\


//Article\\
let article2 = document.createElement('article');
article2.id = "article2";
document.getElementById("article").appendChild(article2)



//3 Div\\

let text1 = document.createElement('div');
text1.textContent = "Texte1"
document.getElementById("article2").appendChild(text1)


let text2 = document.createElement('div');
text2.textContent = "Texte2"
document.getElementById("article2").appendChild(text2)


let text3 = document.createElement('div');
text3.textContent = "Texte3"
document.getElementById("article2").appendChild(text3)



//Colorer les 3 div\\

document.querySelector('article article div:nth-child(1)').style.color = "#d85252";
document.querySelector('article article div:nth-child(2)').style.color = "green";
document.querySelector('article article div:nth-child(3)').style.color = "blue";


//Aligner les 3 div\\

document.getElementById('article2').style.display = "flex";
document.getElementById('article2').style.justifyContent = "center";




//Troisième Partie\\




//Crée la div dans une page\\

let news = document.createElement('div');
news.textContent = "Je suis maDiv"

//Déclarer une variable maDiv\\

let madiv = news


//Afficher la variable dans la console\\

console.log(madiv)


//Ajouter un id et lui donnerune valeur\\

news.id = "majoliediv"


//Afficher la variable dans la console\\

console.log(madiv)


//Crée une classe CSS maClasse avec des propriétés\\

news.className = "maClasse"
document.body.appendChild(news)
document.querySelectorAll(".maClasse").forEach(div => div.style.color = "white")





//Quatrième Partie\\


//Afficher une image\\

let anim = function () { this.style.backgroundColor = "blue"; this.style.borderRadius = "50%"; this.style.transitionDuration = "0.6s"; };

let monImage = new Image(500, 500)

document.body.appendChild(monImage);


//Afficher la source dans la console\\

let source = monImage.src = "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"

console.log(source)

monImage.onclick = anim


//Cinquième Partie\\


let titre = document.createElement('h1');
titre.id = "Survol";
titre.textContent = "Survol moi";
document.body.appendChild(titre);
document.getElementById('Survol').style.color = "white";
document.getElementById('Survol').style.textAlign = "center";



let enter = function () {
    this.style.color = "brown"; this.style.transitionDuration = "1s"
};

let leave = function () {
    this.style.color = "white"; this.style.transitionDuration = "1s"
};

titre.onmouseenter = enter
titre.onmouseleave = leave