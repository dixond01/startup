const { WebSocketServer } = require('ws');
const uuid = require('uuid');
const DB = require('./database.js');
const url = require('url');

function peerProxy(httpServer) {
  // Create a websocket object
  const wss = new WebSocketServer({ noServer: true });

  // Handle the protocol upgrade from HTTP to WebSocket
  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });

  // Keep track of all the connections so we can forward messages
  let connections = [];

  wss.on('connection', async function connection(ws, request) {
    const connection = { id: uuid.v4(), alive: true, ws: ws };
    connections.push(connection);
    console.log("connection made");

    const parameters = url.parse(request.url, true).query;
    const token = parameters.token;
    user = await DB.getUserByToken(token);
    DB.makeOnline(user.email);
    ws.send(JSON.stringify({type: 'status', value: 'online'}));
    //authenticate token? with user.token = token?
    

    // Forward messages to everyone except the sender
    ws.on('message', function message(data) {
      connections.forEach((c) => {
        if (c.id !== connection.id) {
          c.ws.send(data);
        }
      });
    });

    // Remove the closed connection so we don't try to forward anymore
    ws.on('close', async () => {
      const parameters = url.parse(request.url, true).query;
      const token = parameters.token;
      user = await DB.getUserByToken(token);
      DB.makeOffline(user.email);
      const pos = connections.findIndex((o, i) => o.id === connection.id);
      console.log("connection closed");
      ws.send(JSON.stringify({type: 'status', value: 'offline'}));

      if (pos >= 0) {
        connections.splice(pos, 1);
      }
    });

    // Respond to pong messages by marking the connection alive
    ws.on('pong', async () => {
      const parameters = url.parse(request.url, true).query;
      const token = parameters.token;
      user = await DB.getUserByToken(token);
      DB.makeOnline(user.email);
      connection.alive = true;
    });
  });

  // Keep active connections alive
  setInterval(() => {
    connections.forEach((c) => {
      // Kill any connection that didn't respond to the ping last time
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        try {
          c.ws.ping();
        } catch (error) {
          console.error('Error sending ping:', error);
          // Optionally terminate the connection or take other actions
          c.ws.terminate();
        }
      }
    });
  }, 500000);
}

module.exports = { peerProxy };
