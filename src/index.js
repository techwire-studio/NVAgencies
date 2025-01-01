import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./components/CartContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
