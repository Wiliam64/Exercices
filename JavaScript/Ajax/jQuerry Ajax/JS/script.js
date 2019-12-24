/*

// Je crée une requete
let requete = new XMLHttpRequest;

// J'ouvre ma requete, je renseigne la méthode 'POST' ou 'GET', et l'URL/fichier à récuopérer
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
   fromage.forEach(element => {

    // Je déclare mes balises HTML personnalisées ou non
       let mesdiv = document.createElement('div');
       let titre = document.createElement('h1');
       let classement = document.createElement('classement')
       let type = document.createElement('type');

    // J'insère le texte dans mes balises depuis l'argument 'element' suivis de l'information de mon tableau que je veux recueillir 
       titre.innerText = element.nom;
       classement.innerHTML = element.classement;
       type.innerHTML = "Type : " + element.type + ' / Pays : ' + element.pays;

    // Je place mes balises dans le document HTML
       document.body.appendChild(mesdiv);
       mesdiv.appendChild(titre);
       mesdiv.appendChild(classement);
       mesdiv.appendChild(type);
    });
};
*/

$.ajax({
   type: "get",
   url: "JS/fromages.json",
   data: "data",
   dataType: "json",
   success: function (response) {
      // console.log(response);
      $(response).each(function (index, element) {
         // element == this
         $('body').append('<div></div>');
         console.log(element.nom);
         new Fromages(this.nom, this.type, this.pays, this.classement);
         // $('h1').text(element);
         // $('classement').text(element.classement);
         // $('pays').text(element.pays);
         // $('type').text(element.type);
         
         // $('div').append('<h1></h1>');
         // $('div').append('<pays></pays>');
         // $('div').append('<classement></classement>');
         // $('div').append('<type></type>');
      });
   }
});