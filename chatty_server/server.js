// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');
const PORT = 3001;
const helpers = require("./helper-function/userColorChange.js")
console.log(helpers.randomColor());
// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    return  client.send(data);
  });
};

//runs when clients connect to server
wss.on('connection', (ws) => {
  console.log('Client connected---->');
  let onlineUsers = {
    activeUsers: wss.clients.size,
    type: "incomingOnlineUserInfo"
  }
  wss.broadcast(JSON.stringify(onlineUsers))

  ws.color = helpers.randomColor()
  let userColor = {
    userColor: ws.color,
    type: "incomingColor"
  }
  wss.broadcast(JSON.stringify(userColor))

// Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', (ws) => {
    console.log('Client disconnected')
    let onlineUsers = {
    activeUsers: wss.clients.size,
    type: "updatedNumberOfUsers"
  }
    console.log("client disconnected--->");
    wss.broadcast(JSON.stringify(onlineUsers))
  });
// Catching message depending on type and broadcasting to all users
  ws.on('message', function incoming(data) {
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
})
