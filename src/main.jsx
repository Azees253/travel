import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/travel/">
    <App />
  </BrowserRouter>

  // <BrowserRouter>
  //   <Routes basename="/vite">
  //     <Route path="/" element={<Navbar />} />
  //   </Routes>
  // </BrowserRouter>
);
