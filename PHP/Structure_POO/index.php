    <?php
    include './config/config.php';
    include './Classe/Classes.php';
    include tableau;
    include template.'/head.php';
    include template.'/nav.php';
    // include css;
    $page = isset($_GET['page']) ? $_GET['page'] : "accueil";

    $Router = new Router;
    $Router->getTemplate($routes,$page);
?>