import React from "react";
import { render } from "react-dom";
import { useBreakpoint } from "../../src";

const BreakpointExample = () => {
  const { breakpoint } = useBreakpoint();
  return <p>Breakpoint: {breakpoint}</p>;
};

const App = () => <BreakpointExample />;

render(<App />, document.getElementById("root"));
