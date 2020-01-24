<?php
// * Connexion à la BDD

$pdo = new PDO("mysql:host=localhost;dbname=gestion_utilisateur;port=3306", "phpmyadmin","Dovaogedys64");

$stmt = $pdo->prepare("SELECT * FROM Ville");

$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC); 

// $results = json_encode($results);

var_dump($results);