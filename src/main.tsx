import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContainer from "./components/page.container";
import Header from "./components/header/header";
import HomePage from "./pages/home.page";
import { bgImages } from "./bgimages";
import DesPage from "./pages/des.page";
import CrewPage from "./pages/crew.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageContainer imgs={bgImages[0]}>
        <Header />
        <HomePage />
      </PageContainer>
    ),
  },
  {
    path: "/destination",
    element: (
      <PageContainer imgs={bgImages[1]}>
        <Header />
        <DesPage />
      </PageContainer>
    ),
  },
  {
    path: "/crew",
    element: (
      <PageContainer imgs={bgImages[2]}>
        <Header />
        <CrewPage />
      </PageContainer>
    ),
  },
  {
    path: "/technology",
    element: (
      <PageContainer imgs={bgImages[3]}>
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
