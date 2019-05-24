

var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));


console.log("My socket server is running")

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

var player = {
    x: 0,
    y: 0
}

function newConnection(socket) {
    //console.log('new connection: ' + socket.id);
    socket.on('mouse', mouseMsg);
    socket.on('input', textMessage);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
        player.x = data.x;
        player.y = data.y;
    
    }

    function textMessage(data) {
        socket.broadcast.emit('input', data); 
   
     }

    // setInterval(heartbeat, 33);
    // function heartbeat(){
    //     socket.broadcast.emit('heartbeat', player);
    // }
}
