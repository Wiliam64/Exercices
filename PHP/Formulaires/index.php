<?php
session_start();
echo isset($_SESSION["name"]);
    if(!isset($_SESSION["name"])){
    include "form.php";
} else {
    include "page.php";
}