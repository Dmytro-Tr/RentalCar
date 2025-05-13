import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import "./index.css";
// import { store } from "./redux/store.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  // </Provider>
);
