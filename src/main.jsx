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
import MainProvider from "./providers/MainProvider";
import { Toaster } from "react-hot-toast";

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
        path: "friend/:id",
        loader: async ({ params }) => {
          return fetch("/friends.json")
            .then((res) => res.json())
            .then(
              (data) =>
                data?.find((item) => item?.id === parseInt(params?.id)) || {},
            );
        },
        Component: Friend,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainProvider>
      <Toaster />
      <RouterProvider router={router} />
    </MainProvider>
  </StrictMode>,
);
