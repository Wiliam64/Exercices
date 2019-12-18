// let send = document.getElementById("envoi");

// send.addEventListener("click", () => {
//     afficher();
// });
// function afficher() {
//     let section = document.createElement("section");
//     document.body.appendChild(section);

//     let xhr = new XMLHttpRequest();
//     xhr.open("get", "datas/chapitre.json");
//     xhr.responseType = "json";
//     xhr.addEventListener("load", () => {
//         xhr.response.forEach(element => {
//             new Chapitre(xhr.titre, xhr.texte);
//             let article = document.createElement("article");
//             let titre = document.createElement("h1");
//             let texte = document.createElement("p");
//             titre.innerText = element.titre;
//             texte.innerText = element.texte;
//             section.append(article);
//             article.append(titre, texte);
//         });
//         titre.innerText = xhr.titre;
//         texte.innerText = xhr.texte;
//     });
//     xhr.send();
// }





let send = document.getElementById("envoi");

send.addEventListener("click", () => {
    afficher();
});

let section = document.createElement("section");
document.body.appendChild(section);

function afficher() {
    
    section.innerHTML = "";
    let xhr = new XMLHttpRequest();
    xhr.open("get", "php/data.php");
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
        xhr.response.forEach(element => {
            new Chapitre(xhr.titre, xhr.texte);
            let article = document.createElement("article");
            let titre = document.createElement("h1");
            let texte = document.createElement("p");
            titre.innerText = element.titre;
            texte.innerText = element.texte;
            section.append(article);
            article.append(titre, texte);
        });
        // titre.innerText = xhr.titre;
        // texte.innerText = xhr.texte;
    });
    xhr.send();
}

