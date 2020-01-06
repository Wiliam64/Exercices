let i = 0;
do{
    i++

function faireQqc(){
    return new Promise((resolve, reject) => {
        if(i == 10) {
            resolve("Réussite : " + i);
        } else {
            reject("Échec : " + i);
        }
    })
}
function successCallback(resultat) {
    console.log("L'opération a réussi avec le message : " + resultat);
}

function failureCallback(erreur) {
console.error("L'opération a échoué avec le message : " + erreur);
}

faireQqc().then(successCallback, failureCallback);

} while(i != 13)