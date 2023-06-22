import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import Root from "./routes/root";
import ErrorPage from "./pages/error-page.jsx";
import AboutMePage from "./pages/about-me-page";
import LandingPage from "./pages/landing-page";
// Style
import "./style/reset.module.css";
import "./style/global.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "aboutme",
        element: <AboutMePage />,
      },
    ],
  },
  {
    path: "blog/:blogId",
    element: <div>This will be my blog page!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
