<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Variables</title>
</head>
<body>
<h1>Test</h1>
    <?php 
        $hello = "Hello, "; 
        //Afficher la variable $hello//
        echo gettype($hello);
        $world = "World !";

        $helloWorld = $hello.$world;
        echo $helloWorld;

        $montantHt = 15.2;

        echo $montantHt*1.2;
    ?>
</body>
</html>