import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-page/components/login.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
