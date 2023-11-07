import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContainer from "./components/page.container";
import Header from "./components/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageContainer>
        <Header />
      </PageContainer>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
