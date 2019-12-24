// Je crée une requete
let requete = new XMLHttpRequest;

// J'ouvre ma requete, je renseigne la méthode 'POST' ou 'GET', et l'URL/fichier à récupérer
// requete.open("GET", "JS/fromages.json");
requete.open("GET", "JS/fromages.json");

// Je demande le type de réponse recus (texte, JSON, etc)
requete.responseType = "json";

// J'envoie la requete
requete.send();

// Je crée une fonction 'onload'
requete.onload = function(){
    alert("Requête aboutit")

    // Je déclare une variable, qui contient la réponse a ma requete sous forme de tableau
   let fromage = requete.response;

   // Je parcours mon tableau avec 'forEach', avec pour argument 'element', qui représente chaque element de mon tableau
   fromage.forEach(e => {
      
    // Je crée un objet 'Fromages', avec la class 'Fromage', pour chaque element de mon tableau
      new Fromages(e.nom, e.type, e.pays, e. classement)
    });
};