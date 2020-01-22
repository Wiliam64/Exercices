// let monMain = document.querySelector('main')
// let maDiv = document.createElement('div');
// let monSpan = document.createElement('span');
 
// monSpan.innerHTML = "Hello";

// maDiv.appendChild(monSpan);
// document.body.appendChild(maDiv);
// console.log(monMain);
// console.dir(monMain);



function chapitre(titre, texte){
    let maDiv = document.createElement("div");
    let monTitre = document.createElement("h1");
    let monParagraphe = document.createElement("p");
    monTitre.innerText = titre;
    monParagraphe.innerText = texte;
    maDiv.appendChild(monTitre);
    maDiv.appendChild(monParagraphe);
    document.body.appendChild(maDiv);
}
let titre1 = "Welcome !"


// Objet JS (Ne pas oublier la virgule entre chaque propriété)

let chapitre1 = {
    titre: "Bienvenue !",
    texte: "Bienvenu sur mon site plein de lorem ipsum"
}



chapitre(titre1, "Bienvenue sur mon site ! Avec du lorem ipsum...");
chapitre(chapitre1.titre, chapitre1.texte);
chapitre("Salut !", "Encore ?! Toujours du lorem ipsum...");


// Classe JS