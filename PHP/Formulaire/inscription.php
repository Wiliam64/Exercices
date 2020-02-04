<?php
session_start();
$uname = $_SESSION["email"] = $_POST["email"];
$pass = $_SESSION["password"] = hash("sha256", $_POST["password"]);
$remember = isset($_POST["remember"]);


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
    
    if($pseudoINbdd == 0){
        $sql1 = "INSERT INTO `user`(`id`, `userName`, `pswd`) VALUES (null,'$uname','$pass')";
        $pdo->exec($sql1);
        // echo "Nouvel utilisateur";
        header("Location: page.php");
    } else {
        echo '<script language="javascript" type="text/javascript">alert("Pseudo déja prit")</script>';
        include "form_inscription.php";
    }
    include "cookies.php";
    
} catch(PDOException $e){
    echo "Erreur : ".$e->getMessage();
}

