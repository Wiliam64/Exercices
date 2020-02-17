<?php


class Database {
    private $tokenAuth;
    private $pdo;

    public function __construct() {
        $this->tokenAuth = array(
            'dname'=>'clients',
            'host'=>'127.0.0.1',
            'user'=>'phpmyadmin',
            'password'=>'Dovaogedys64',
        );
    }

    // * Connexion à la base de données
    public function getPDO() {
        try {
            if ($this->pdo == null) {
                $pdo = new PDO('mysql:dbname='.$this->tokenAuth['dbname'].';host='.$this->tokenAuth['host'].';user='.$this->tokenAuth['user'].';password='.$this->tokenAuth['password']);
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->$pdo = $pdo;
            }
        } catch (PDOException $e){
            var_dump($e);
        }
    }

    // * Fermer la connexion à la base de données
    public function shudown() {
        $this->pdo = null;
        return true;
    }

    // * Requête query à la base de données
    public function query($statement) {
        $request = $this->getPDO()->query($statement);
        $this->shudown();
        return $request;
    }

    // * Requête prepare à la base de données
    public function prepare($statement, $values) {
        $request = $this->getPDO()->prepare($statement);
        $this->shudown();
        return $request;
    }

    public function compteDatebasevalue($connexionBDD, $key, $value){
        $request = "SELECT * FROM clients WHERE $key=?";
        $rowCount = $connexionBDD->prepare($request);
        $rowCount->execute(array($value));
        return $rowCount->rowCount();
    }
}




























