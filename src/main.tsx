import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Acting from "./pages/Acting";
import Writing from "./pages/Writing";
import Directing from "./pages/Directing";
import NotFound from "./pages/NotFound";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="acting" element={<Acting />} />
          <Route path="writing/*" element={<Writing />} />
          <Route path="directing" element={<Directing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
