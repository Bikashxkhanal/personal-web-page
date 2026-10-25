import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HireMe from "./components/hireme.jsx";
import CLI from "./components/cli.tsx";
import { ThemeProvider } from "./context/ThemeContext";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/hire-me", element: <HireMe /> },
  { path: "/#cli", element: <CLI /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
