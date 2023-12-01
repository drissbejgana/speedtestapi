const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const FastSpeedtest = require('fast-speedtest-api');

let speedtest = new FastSpeedtest({
  token: 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm',
  verbose: false, // default: false
  timeout: 8000, // default: 5000
  https: true, // default: true
  urlCount: 5, // default: 5
  bufferSize: 8, // default: 8
  unit: FastSpeedtest.UNITS.Mbps,

});

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(__dirname + '/public'));

// Set up a basic route for the chat page
app.get('/speedtest', (req, res) => {
  speedtest.getSpeed().then(s => {
      res.send(`{"Speed": ${s}}`);
    ;})

   

});


// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
