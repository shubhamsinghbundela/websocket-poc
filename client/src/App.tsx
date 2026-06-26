import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Connect to WebSocket server
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected");

      socket.send(
        JSON.stringify({
          type: "PLACE_ORDER",
          price: 100,
          quantity: 2,
        }),
      );
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      console.log("Received:", message);
    };

    socket.onclose = () => {
      console.log("Disconnected");
    };

    socket.onerror = (error) => {
      console.error(error);
    };

    // Cleanup
    return () => {
      socket.close();
    };
  }, []);
  return <div>Hello World</div>;
}

export default App;
