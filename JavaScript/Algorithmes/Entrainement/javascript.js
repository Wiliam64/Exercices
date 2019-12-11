let id = ("12345");
let iduser = ("");
let mdp = ("123")
let mdpuser = ("")
let essai = 0;
console.log("Coucou");

    do{
        iduser = prompt("Identifiants");
        essai++;
        if(essai == 6){break};
        if(iduser == id){
            do {
                essai = 0
                mdpuser = prompt('Mot de passe');
                essai++;
                if(essai == 3){break}
            }
            while(mdpuser !== mdp)
    }}
    while(iduser !== id);
