<?php
$tab = array(15,22);
$tabCrochets = [15,22];
var_dump($tab);
var_dump($tabCrochets);
$jours = array("Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
var_dump($jours);
echo $jours[1],"<br>";
echo $jours[4],"<br>";
array_push($jours, "Dimanche");
var_dump($jours);
echo $jours[6];
array_splice($jours, 6, 1);
var_dump($jours);
?>