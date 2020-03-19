let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
    console.log('Un utilisateur est connecté !');
    socket.on('disconnect', function (){
        console.log('Un utilisateur est déconnecté !');
    })
    socket.on('chat message', function (msg){
        console.log('Message reçu : ' + msg);
        io.emit('chat message', msg);
    })

})

http.listen(3000, function(){
    console.log("Server running on 3000")
})