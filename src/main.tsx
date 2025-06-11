import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import MainPage from "./pages/mainPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
