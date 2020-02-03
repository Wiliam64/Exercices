<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulaire</title>
</head>
<body>
    <form action="inscription.php" method="post">
        <label for="name">Login</label>
        <input type="text" name="name" required><br>
        <label for="pass">Password</label>
        <input type="password" name="password" required><br>
        <input type="checkbox" name="remember">
        <label for="remember">Se souvenir de moi</label><br>
        <input type="submit" value="Ok"><br>
    </form>
</body>
</html>