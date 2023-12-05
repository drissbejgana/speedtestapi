const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(__dirname + '/public'));

// Set up a basic route for the chat page
app.post('/', (req, res) => {
  console.log(req.body)
  res.send(JSON.stringify(req.body))

});


// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  
});

