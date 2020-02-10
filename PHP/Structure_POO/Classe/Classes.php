<?php

class Router
{
    function getTemplate($el,$e)
    {
        if ($e == "/Exercices/PHP/Structure_d'application_POO/".$el) {
            include $el[$e];
            include template . '/footer.php';
            // echo "Oui";
        } else {
            include error;
            // echo "Non";
        }
    }
}