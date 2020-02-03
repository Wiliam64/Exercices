<?php
session_start();
$uname = $_SESSION["name"] = $_POST["name"];
$pass = $_SESSION["password"] = hash("sha256", $_POST["password"]);
$remember = $_POST["remember"];


$servername = "localhost";
$dbname = "exo_formulaire";
$username = "phpmyadmin";
$password = "Dovaogedys64";

try{
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pseudo_Exist = $pdo->prepare("SELECT userName FROM user WHERE userName = :userName");
    $pseudo_Exist->bindValue('userName', $uname, PDO::PARAM_STR);
    $pseudo_Exist->execute();

    $pseudoINbdd = $pseudo_Exist->rowCount();
    
    if(isset($_COOKIE["auth"])){
        $auth = $_COOKIE["auth"];
        $auth = explode("-----", $auth);
        var_dump($auth);
        $user = $pdo->prepare('SELECT * FROM user WHERE userName =:userName');
        $key = sha1($uname);
    }
    if($key == $auth[0]){
        echo "valide";
        header("Location: page.php");
        die;
        
    } else{
        die("Pas Valide");
    }

    // if($_POST["remember"] == '1' || $_POST["remember"] == 'on'){
    //     setcookie("auth", sha1($uname)."-----".sha1($pass), time()+3600, '/', "false", "true");
    // }

    // if($pseudoINbdd == 1){
    //     header("Location: page.php");
    // } else {
    //     echo "Pseuso ou mot de passe invalide";
    //     include "form_connexion.php";
    // }
    // include "cookies.php";
    
} catch(PDOException $e){
    echo "Erreur : ".$e->getMessage();
}