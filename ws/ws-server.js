import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 3001 });

const clients = []

ws.on("connection", ws => {
  console.log("Client connected");

  clients.push(ws)

  ws.on("message", function message(data) {
    console.log("received: %s", data);

    clients.forEach(client => {
    client.send(data.toString())
    })

  })

  // const interval = setInterval(() => {
  //   ws.send("hello stranger");
  // }, 100);

  ws.on("close", ws => {
    console.log("Client disconnected: " , ws);
  });

  ws.onerror = function () {
    console.log("Some Error occurred");
  };
});