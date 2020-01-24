    <?php
    include './config/config.php';
    include tableau;
    include template.'/head.php';
    include template.'/nav.php';
    // include css;
    $page = isset($_GET['page']) ? $_GET['page'] : "accueil";

    if(isset($routes[$page])){ 
        include $routes[$page];
        include template.'/footer.php';
    } else {
        include error;
    }
// switch ($page) {
//     case "accueil":
// // echo "Done";
//         include './template/pages/accueil.php';
//         include template.'/footer.php';
//         break;
//     case "produits":
// // echo "Done";
//         include './template/pages/produits.php';
//         include template.'/footer.php';
//         break;
//     case "blog":
// // echo "Done";
//         include './template/pages/blog.php';
//         include template.'/footer.php';
//     break;
//     case "contact":
// // echo "Done";
//         include './template/pages/contact.php';
//         include template.'/footer.php';
//         break;
//     case "about":
// // echo "Done";
//         include './template/pages/about.php';
//         include template.'/footer.php';
//         break;
//     default:
// // echo "Error";
//         include error;
//         include template.'/footer.php';
// }

?>