import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Cartprovider } from "./cartcontext/index.jsx";
import { Loginprovider } from "./cartcontext/logincontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Cartprovider>
      <Loginprovider>
        <App />
      </Loginprovider>
    </Cartprovider>
  </BrowserRouter>
);
