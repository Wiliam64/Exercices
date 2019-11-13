let crea = function creation(){

    let nombrePara = Number(prompt('Combien de paragraphes?'));

    for (let i = 0; i < nombrePara; i++) {
        let titre = document.createElement("h1");
        let para = document.createElement("p");
        let paraTitre = prompt('Entrez un titre');
        let paraText = prompt('Entrez un texte');
        let section = document.createElement("section");
    
        document.body.appendChild(section);
    
        titre.textContent = paraTitre;
        para.textContent = paraText;
        section.appendChild(titre);
        section.appendChild(para);
    }
}

let button = document.createElement("button")
button.innerText = "Ajouter un paragraphe"
document.body.appendChild(button)

button.onclick = crea

button.style.backgroundColor = "Green"; 
button.style.color = "White"
button.style.width = "15vw"
button.style.height = "7vh"
button.style.borderRadius = "1em"
button.style.fontSize="20px"

document.querySelector("body").style.width ="100%"
document.querySelector("body").style.height ="100%"