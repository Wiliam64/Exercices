function faireQqc(){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest;
        xhr.open('get', 'data/promesses.json');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function () {
            let i = xhr.response;
            console.log("Auteur : " + i.auteur);
            console.log("Promesse : " + i.promesse);
            console.log("URL : " + i.url);
}
    })
}
const promise = faireQqc();
const promise2 = promise.then();

fetch('./data/anatole.json')
.then((data) => data.json()
.then(function(d){
    console.log(d.description);
    console.log(d.url);
})
);