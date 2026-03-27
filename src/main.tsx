import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="text-3xl font-bold py-12 text-red-500">Hello World</div>
  </StrictMode>,
);
