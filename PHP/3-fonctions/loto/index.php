<?php
function tableau($n1, $n2){ //Fonction qui implémente +1 dans le tableau pour faire un tableau de $n1 à $n2 qui sont des arguments
    $tableau = array();  //Déclaration du tableau
    
    for ($n = $n1; $n <= $n2; $n++) { //Boucle 'for' tant que $n1 n'est pas égal à $n2, incrémente $n de +1
        array_push($tableau, $n); // Empile $n a la fin du tableau, jusqu'a ce que $n1 = 49
    }
    var_dump($tableau); //Affiche le tableau 
};
tableau(1, 49); //Appel de la fonction, crée un tableau de 1 à 49


echo "<h1>Boucle for</h1>";
function tirage(){ //Fonction qui implémente 5 chiffre aléatoire dans le tableau 
    $tableau = array(); //Déclaration du tableau

    for($n = 1; $n <= 5; $n++) { //Boucle 'for' tant que $n n'est pas égal à 5, incrémente $n de +1
        array_push($tableau, random_int(1,49)); //Empile un chiffre aléatoire entre 1 et 49
    }
    return($tableau); //Affiche le tableau
    
};
tirage(); //Appel de la fonction

echo "<h1>Boucle while</h1>";
function tirage2(){ //Fonction identique a la précédente, avec une boucle While
    $tableau = array(); //Déclaration du tableau
    $n = 1; //Déclaration de $n qui vaut 1
    while($n <= 5 ) { //Boucle 'while' jusqu'a ce que $n soit égal à 5
        $random = random_int(1,49);
        if(!in_array($random, $tableau)){
            array_push($tableau, $random); //Empile un chiffre aléatoire entre 1 et 49
            $n++; //Incrémente $n de +1
        }
    };
    var_dump($tableau); //Affiche le tableau
}
tirage2(); //Appel de la fonction



function loto(){
    $grille = array(2,4,8,9,2);
    $tableau = array();  //Déclaration du tableau
    
    for ($n = 1; $n <= 10; $n++) { //Boucle 'for' tant que $n1 n'est pas égal à $n2, incrémente $n de +1
        array_push($tableau, $n); // Empile $n a la fin du tableau, jusqu'a ce que $n1 = 49
    }
    // $resultat = array();
    $resultat = array(array_rand(array_flip($tableau), 5));
    // $compare = array();
    $compare = array(array_diff($grille, $resultat));
    var_dump($resultat);
    return empty($compare);
}

$count = 0;
do{
    loto();
    $count++;
} while(loto() == false);

echo 'Tu as gagné en '.$count.' essaie !';
?>