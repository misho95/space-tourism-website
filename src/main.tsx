import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContainer from "./components/home.page.container";
import Header from "./components/header";
import HomePage from "./pages/home.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageContainer>
        <Header />
        <HomePage />
      </PageContainer>
    ),
  },
  {
    path: "/destination",
    element: (
      <PageContainer>
        <Header />
      </PageContainer>
    ),
  },
  {
    path: "/crew",
    element: (
      <PageContainer>
        <Header />
      </PageContainer>
    ),
  },
  {
    path: "/technology",
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
