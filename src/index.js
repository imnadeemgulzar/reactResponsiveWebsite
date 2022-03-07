import React from "react";
import reactDom from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
reactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
