<?php

require __DIR__.'/vendor/autoload.php';


$tableau = array(
    'Jour 1'=>'Lundi',
    'Jour 2'=>'Mardi',
    'Jour 3'=>'Mercredi',
    'Jour 4'=>'Jeudi',
    'Jour 5'=>'Vendredi',
    'Jour 6'=>'Samedi',
    'Jour 7'=>'Dimanche',
);
// dump($tableau);
require __DIR__ . "/vendor/autoload.php";

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;

//démarrage de la session
$session = new Session();
$session->start();

//création de l'objet $request
$request = Request::createFromGlobals();

// notre vardumper !
dump($request->query);

//affichage des messages flash
foreach ($session->getFlashBag()->all() as $type => $messages) {
    foreach ($messages as $message) {
        echo '<div class="flash-'.$type.'">'.$message.'</div>';
    }
}

//envoi de la réponse
$response = new Response("ok");
$response->send();