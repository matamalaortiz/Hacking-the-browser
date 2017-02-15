// HTTP Portion
var http = require('http');
var fs = require('fs');
var httpServer = http.createServer(requestHandler);
httpServer.listen(8080);

// http request
function requestHandler(req, res) {
        // Read screen.html
        fs.readFile(__dirname + '/screen.html',
                // Callback function for reading
                function (err, data) {
                        // if there is an error
                        if (err) {
                                res.writeHead(500);
                                return res.end('Error loading screen.html');
                        }
                        // Otherwise, send the data, the contents of the file
                        res.writeHead(200);
                        res.end(data);
                }
        );
}

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(httpServer);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
        // We are given a websocket object in our function
        function (socket) {

                console.log("We have a new client: " + socket.id);

                // When this user "send" from clientside javascript, we get a "message"
                // client side: socket.send("the message");  or socket.emit('message', "the message");
                socket.on('message',
                        // Run this function when a message is sent
                        function (data) {
                                console.log("message: " + data.x + " " + data.y + " " + data.z);

                                // Call "broadcast" to send it to all clients (except sender), this is equal to
                                // socket.broadcast.emit('message', data);
                                socket.broadcast.send(data);

                                // To all clients, on io.sockets instead
                                // io.sockets.emit('message', "this goes to everyone");
                        }
                );

                socket.on('disconnect', function() {
                        console.log("Client has disconnected");
                });
        }
);
