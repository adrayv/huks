import React from "react";
import { render } from "react-dom";
import { useBreakpoint, useSocket } from "../../src";

const BreakpointExample = () => {
  const { breakpoint } = useBreakpoint();
  return <p>Breakpoint: {breakpoint}</p>;
};

const SocketExample = () => {
  const { status, sendMsg, receivedMsg } = useSocket(
    "wss://javascript.info/article/websocket/demo/hello"
  );
  return (
    <React.Fragment>
      <p>status: {status}</p>
      <p>received: {receivedMsg}</p>
      <button onClick={() => sendMsg("Foo")}>Send Foo</button>
    </React.Fragment>
  );
};

const App = () => (
  <React.Fragment>
    <BreakpointExample />
    <SocketExample />
  </React.Fragment>
);

render(<App />, document.getElementById("root"));
