console.log("Hello");

const express = require("express");
const app = express();
const route = "/var/www/html/Exercices/JavaScript/Node/Exo1/pages/";

// respond with "hello world" when a GET request is made to the homepage


app.get('/', function(req, res) {
    res.sendFile('/var/www/html/Exercices/JavaScript/Node/Exo 2/mythique.html');
    app.use(express.static('public'));
  });

app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});
