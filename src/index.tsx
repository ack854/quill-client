import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-page/components/login.tsx";
import Dashboard from "./pages/dashboard-page/components/dashboard.tsx";
import Pages from "./pages/pages/pages.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
