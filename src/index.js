import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import thirdweb provider
import { ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chain your dApp will work on.
const activeChain = "mumbai";

// Wrap your app with the thirdweb provider
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
