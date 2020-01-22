//Déclaration d'un tableau a 2 dimensions ou tableau de tableau
let tab = [
    [32,87],
    [1,3],
    [65,16],
    [5,12],
    [6,34]
];

console.log(tab[0]); //[32,87]
console.log(tab[0][1]); //87

console.group("Affichage des éléments de tab")
for(let sousTab of tab){
    console.log(sousTab);
    for(let element of sousTab){
        console.log(element);
    }
}
console.groupEnd()



console.group("Affichage des éléments de tab avec des indices")
for(let i = 0; i < tab.length ; i++){
    console.log(tab[i]); //[23, 87]
    for(let j = 0; j < tab[i].length; j++){
        console.log(i,j,tab[i][j]);  
    }
}
console.groupEnd()