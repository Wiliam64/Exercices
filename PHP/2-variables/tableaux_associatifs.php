<?php
$activites = array("Lundi"=>"Php","Mardi"=>"Javascript", "Mercredi"=>"Typescript","Jeudi"=>"Angular","Vendredi"=>"SQL","Samedi"=>"Python","Dimanche"=>"Tout");
//deux dimensions
var_dump($activites);
print_r(array_values($activites));
$activites["Dimanche"] = "Rien";
var_dump($activites);

$pierre = array("1"=>"Php","2"=>"Javascript","3"=>"Python");
$paul = array("1"=>"Javascript","2"=>"Css","3"=>"Php");
$jacques = array("1"=>"Java","2"=>"Php","3"=>"Javascript");

$preferences1 = array_merge($pierre, $paul, $jacques);
$preferences2 = array('Pierre' => $pierre, 'Paul' => $paul, 'Jacques' => $jacques);


var_dump($preferences1);
var_dump($preferences2);


var_dump(array_count_values($preferences1));

?>