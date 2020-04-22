console.log("Hello");

const express = require("express");
const app = express();
const route = "/var/www/html/Exercices/JavaScript/Node/Exo1/pages/";
const menu = "/var/www/html/Exercices/JavaScript/Node/Exo1/structure/menu.html";

// respond with "hello world" when a GET request is made to the homepage


app.get('/', function(req, res) {
    res.sendFile('/var/www/html/Exercices/JavaScript/Node/Exo1/index.html');
  });

app.get('/blog', function(req, res) {
    res.sendFile(route+'blog.html');
  });

app.get('/contact', function(req, res) {
    res.sendFile(route+'contact.html');
  });

app.get('*', function(req, res) {
    res.status(404).sendFile(route+'404.html');
  });

app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});
