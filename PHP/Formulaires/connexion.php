<?php 
    session_start();
    $uname = $_SESSION["name"] = $_POST["name"];
    $pass = $_SESSION["password"] = hash("sha256", $_POST["password"]);
    // header("Location: index.php");

    $servername = "localhost";
    $dbname = "exo_formulaire";
    $username = "phpmyadmin";
    $password = "Dovaogedys64";

    try{
        $dbco = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

        $dbco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        echo "Connexion réussie";
        if(isset($uname))
        $sql1 = "INSERT INTO `user`(`id`, `user_name`, `pswd`) VALUES (null,'$uname','$pass')";

        $dbco->exec($sql1);

    } catch(PDOException $e){
        echo "Erreur : ".$e->getMessage();
    }
?>