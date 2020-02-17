<?php
session_start();
include "./Databases.php";

if(isset($_POST["submit"])){
    $pseudo = htmlspecialchars($_POST["pseudo"]);
    $email = htmlspecialchars($_POST["email"]);
    $password = crypt("sha256", $_POST["password"]);
    $password_confirm = crypt("sha256", $_POST["password_confirm"]);

    date_default_timezone_set("Europe/Paris");
    $date = date('d/m/Y à H:i:s');
    if(!empty($pseudo) && !empty($email) && !empty($password)) {
        if(strlen($pseudo) < 50){
            if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                if($password == $password_confirm){

                    $database = getPDO();
                    $rowEmail = compteDatebasevalue($database, 'user_email',$email);
                    if($rowEmail == 0){


                    
                        $inserMembers = $database->prepare("INSERT INTO users(user_pseudo, user_email, user_password, isadmin, registerdate) VALUES (?,?,?,?,?)'");
                        $inserMembers->excute([
                            $pseudo,
                            $email,
                            $password,
                            0,
                            $date
                        ]);
                        $successmessage = "Votre compte à bien été crée !";
                        header('refresh:3; url=login.php');


                    } else {
                        $errormessage = "Cette email est déjà utilisée";
                    }
                } else {
                    $errormessage = "Les mots de passes ne correspondent pas";
                }

            } else {
                $errormessage = "Votre Email n'est pas valide";
            }
        } else {
            $errormessage = "Pseudo trop long";
        }
    } else {
        $errormessage = "Veuillez remplir tous les champs";
    }
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Espace Client - Inscription</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="text-center">
        <h3>Espace Client - Inscription</h3>
        <a href="index.php">Accueil</a>
        <a href="login.php">Se connecter</a>
    </div>
    <div class="form-div text-center">
        <h3>Inscription</h3>

<?php if(isset($errormessage)) { ?> <p style="color: red"><?=$errormessage?></p> <?php } 
    if(isset($successmessage)) {?> <p style="color: green"><?=$successmessage?></p> <?php }
?>
        <form method="POST" action="">

        <span>Pseudo :</span><br>
        <input type="text" name="pseudo" placeholder="Pseudo"><br>

        <span>Adresse Email :</span><br>
        <input type="email" name="email" placeholder="Email"><br>

        <span>Mot de passe :</span><br>
        <input type="password" name="password" placeholder="Mot de passe"><br>

        <span>Confirmation Mot de passe :</span><br>
        <input type="password" name="password_confirm" placeholder="Conformation Mot de passe"><br><br>

        <button type="sumbit" value="Submit" name="submit">Envoyer</button>
        </form>
    </div>
</body>
</html>