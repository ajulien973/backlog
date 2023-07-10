import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "app/app";
import { makeServer } from "mirage/server";

if (process.env.NODE_ENV !== "production") {
  makeServer({ environment: process.env.NODE_ENV });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
