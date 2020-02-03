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
        $dbco = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $dbco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $pseudo_Exist = $dbco->prepare("SELECT userName FROM user WHERE userName = :userName");
        $pseudo_Exist->bindValue('userName', $uname, PDO::PARAM_STR);
        $pseudo_Exist->execute();

        $pseudoINbdd = $pseudo_Exist->rowCount();
        echo $remember;
        
        if($pseudoINbdd == 0){
            
            $sql1 = "INSERT INTO `user`(`id`, `userName`, `pswd`) VALUES (null,'$uname','$pass')";
            $dbco->exec($sql1);
            // echo "Nouvel utilisateur";
            header("Location: page.php");
            
        } else {
            echo "Pseudo déja prit";
            // session_destroy();
            header("Location: form.php");
        }
        
        if($_POST["remember"] == '1' || $_POST["remember"] == 'on'){
            setcookie("auth", sha1($uname)."-----".sha1($pass), time()+3600, '/', false, true);
        }



    } catch(PDOException $e){
        echo "Erreur : ".$e->getMessage();
    }











?>