import { useEffect, useState } from "react";

const statuses = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];

export default socketUrl => {
  const [connectionStatus, setConnectionStatus] = useState(statuses[0]);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const [socket, setWebsocket] = useState({});

  useEffect(() => {
    const websocket = new WebSocket(socketUrl);
    setWebsocket(websocket);
    setConnectionStatus(statuses[websocket.readyState]);
    websocket.onopen = () =>
      setConnectionStatus(statuses[websocket.readyState]);
    websocket.onerror = err => console.error(err);
    websocket.onmessage = msg => setReceivedMessage(msg.data);
    return () => websocket.close();
  }, []);

  return {
    status: connectionStatus,
    sendMsg: msg => socket.send(msg),
    receivedMsg: receivedMessage
  };
};
