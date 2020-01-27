    <?php
    include './config/config.php';
    include './Classe/Classes.php';
    include tableau;
    include template.'/head.php';
    include template.'/nav.php';
    include css;
    // $page = isset($_GET['page']) ? $_GET['page'] : "accueil";

$way = $_SERVER['REQUEST_URI'] = "/Exercices/PHP/Structure_d'application_POO/";
    
echo $way;
$Rooter = new Router($way,$routes);
$Rooter->getTemplate($way, $routes);
