import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App x={4} y={5} />
  </React.StrictMode>,
);
