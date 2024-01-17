import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import Login from "./pages/login-page/components/login.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/login-page/components/singnup.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="*" Component={App} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </Router>
    {/* <App/> */}
  </React.StrictMode>
);
