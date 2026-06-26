import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("NEW SERVER STARTED");

  ws.send(
    JSON.stringify({
      type: "WELCOME",
      message: "This is the NEW server",
    }),
  );

  ws.on("message", function message(data) {
    console.log(data.toString());
  });

  // Close after 5 seconds
  //   setTimeout(() => {
  //     ws.close();
  //   }, 5000);

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
