import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("_user-payment-methods-dev-root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
