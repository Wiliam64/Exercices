<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulaire</title>
</head>
<body>
    <form action="connexion.php" method="post">
        <label for="name">Login</label>
        <input type="text" name="name" required>
        <label for="pass">Password</label>
        <input type="password" name="password" required>
        <input type="submit" value="Ok">
    </form>
</body>
</html>