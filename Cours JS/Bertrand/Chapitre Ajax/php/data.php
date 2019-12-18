<?php
// connexion à la base de données
$connexion = new PDO("mysql:host=localhost;dbname=gestion_chapitre;charset=utf8;port=3306", "phpmyadmin", "Dovaogedys64");
// requête SQL permettant de récupérer les données de la table chapitre
$req = $connexion->prepare("SELECT * FROM chapitres");
// exécution de la requête
$req->execute();
// récupération des données sous forme de tableau associatif
$datas = $req->fetchAll(PDO::FETCH_ASSOC);
// envoi des données converties au format json
echo json_encode($datas);