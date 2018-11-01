// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.



wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
      client.send(data);
  });
};

wss.on('connection', (ws) => {
  console.log('Client connected---->');
  console.log(wss);
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));

  ws.on('message', function incoming(data) {
   console.log(data);
   const userMessage = JSON.parse(data)
   userMessage.id = uuidv4()
   switch(userMessage.type) {
     case "postMessage":
     userMessage.type = "incomingMessage"
     wss.broadcast(JSON.stringify(userMessage))
     break;
     case "postNotification":
     userMessage.type = "incomingNotification"
     wss.broadcast(JSON.stringify(userMessage))
    default:
      console.log("Invalid type");
   }
  })
});
