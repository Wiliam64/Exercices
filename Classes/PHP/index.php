<?php

class Ville{
    private $nom;
    private $departement;
    public function __construct($nom, $departement)
    {
        $this->nom = $nom;
        $this->departement = $departement;
    }
    public function getInfo(){
        $texte = "La ville de $this->nom est dans le département $this->departement <br>";
        return $texte;
    }
};

$Oloron = new Ville("Oloron", "64400");
echo $Oloron->getInfo();
$Geüs = new Ville("Geüs", "64400");
echo $Geüs->getInfo();


class Personne
{
    private $nom;
    private $prenom;
    private $adresse;
    public function __construct($nom, $prenom, $adresse)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->adresse = $adresse;
    }
    public function getPersonne(){
        $texte = "$this->nom $this->prenom <br> $this->adresse <br>";
        return $texte;
    }
    public function setAdresse($adresse){
        $this->adresse = $adresse;
    }
};

$Jean = new Personne("Jean", "Test", "Geüs d'Oloron 64400");
echo $Jean->getPersonne();
$Pierre = new Personne("Pierre", "Test", "Saint Goin 64400");
echo $Pierre->getPersonne();
$Pierre->setAdresse("Géronce");
echo $Pierre->getPersonne();
unset($Pierre);