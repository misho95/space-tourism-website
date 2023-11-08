import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContainer from "./components/page.container";
import Header from "./components/header/header";
import HomePage from "./pages/home.page";
import { bgImages } from "./bgimages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageContainer
        imgs={bgImages.find((m) => {
          if (m.name === "home") return m;
        })}
      >
        <Header />
        <HomePage />
      </PageContainer>
    ),
  },
  {
    path: "/destination",
    element: (
      <PageContainer
        imgs={bgImages.find((m) => {
          if (m.name === "destination") return m;
        })}
      >
        <Header />
      </PageContainer>
    ),
  },
  {
    path: "/crew",
    element: (
      <PageContainer
        imgs={bgImages.find((m) => {
          if (m.name === "crew") return m;
        })}
      >
        <Header />
      </PageContainer>
    ),
  },
  {
    path: "/technology",
    element: (
      <PageContainer
        imgs={bgImages.find((m) => {
          if (m.name === "technology") return m;
        })}
      >
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
