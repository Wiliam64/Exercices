<?php
function tableau($n1, $n2){ //Fonction qui implémente +1 dans le tableau pour faire un tableau de $n1 à $n2 qui sont des arguments
    $tableau = array(); //Déclaration du tableau
    
    for ($n = $n1; $n <= $n2; $n++) { //Boucle 'for' tant que $n1 n'est pas égal à $n2, incrémente $n de +1
        array_push($tableau, $n); // Empile $n a la fin du tableau, jusqu'a ce que $n1 = 49
    }
    var_dump($tableau); //Affiche le tableau
};
tableau(1, 49); //Appel de la fonction, crée un tableau de 1 à 49



function tirage(){ //Fonction qui implémente 5 chiffre aléatoire dans le tableau 
    $tableau = array(); //Déclaration du tableau

    for($n = 1; $n <= 5; $n++) { //Boucle 'for' tant que $n n'est pas égal à 5, incrémente $n de +1
        array_push($tableau, random_int(1,49)); //Empile un chiffre alétoire entre 1 et 49
    }
    var_dump($tableau); //Affiche le tableau
    
};
tirage(); //Appel de la fonction

function tirage2(){ //Fonction identique a la précédente, avec une boucle While

    $tableau =array(); //Déclaration du tableau
    $n = 1; //Déclaration de $n qui vaut 1
    while($n <= 5) { //Boucle 'while' jusqu'a ce que $n soit égal à 5
        $n++; //Incrémente $n de +1
        array_push($tableau, random_int(1,49)); //Empile un chiffre alétoire entre 1 et 49
    };
    var_dump($tableau); //Affiche le tableau
}
tirage2(); //Appel de la fonction



do{ //Boucle 'do...while' qui fait :
    echo "<h1>Tirage n° ".$i."</h1>"; //Affiche "Tirage n° " suivis de la valeur actuelle de $i
    tirage(); //Appel la fonction tirage
    $i++; //Rajoute +1 à $i
}
while($i <= 10); //Tant que $i n'est pas égal à 10

?>