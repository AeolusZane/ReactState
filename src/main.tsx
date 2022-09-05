import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Bear from "./Bear";
// const root = document.getElementById("root");
// ReactDOM.render(<App />, root);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Bear />
  </React.StrictMode>
);
