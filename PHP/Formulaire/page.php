<?php session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta email="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>Bonjour <?php echo $_SESSION["email"]?></h1>
    </div>
    <div>
        <h1>Hello <?php echo $_SESSION["email"]?></h1>
    </div>
    <div>
        <h1>Hola <?php echo $_SESSION["email"]?></h1>
    </div>

    <a href="logout.php">Déconnexion</a>
</body>
</html>