import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./cartcontext/logincontext"; // ✅ correct capitalization
import { Cartprovider } from "./cartcontext/index.jsx";
import { SignupProvider } from "./cartcontext/signupcontext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <SignupProvider>
          <Cartprovider>
            <App />
          </Cartprovider>
        </SignupProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);
