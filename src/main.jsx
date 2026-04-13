import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import NotFound from "./components/NotFound";
import Friend from "./pages/Friend";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "timeline",
        Component: Timeline,
      },
      {
        path: "stats",
        Component: Stats,
      },
      {
        path: ":id",
        Component: Friend,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
