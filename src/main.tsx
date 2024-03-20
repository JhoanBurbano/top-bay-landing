import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader.tsx";

const Home = lazy(() => import("./views/Home"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
