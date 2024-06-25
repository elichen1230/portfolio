import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";

const rootElement = document.getElementById("root");

// Using createRoot to render the app
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
