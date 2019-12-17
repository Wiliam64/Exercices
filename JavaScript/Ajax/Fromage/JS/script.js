let requete = new XMLHttpRequest;

requete.open("GET", "JS/fromages.json");

requete.responseType = "json"

requete.send();

requete.onload = function(){
    alert("Requête aboutit")
    console.log(JSON.stringify(requete.response))
   let fromage = requete.response
   console.log(fromage);
   fromage.forEach(element => {
       console.log(element.nom);
       
       
   });
};