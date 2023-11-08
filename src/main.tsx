import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageContainer from "./components/home.page.container";
import Header from "./components/header";
import HomePage from "./pages/home.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePageContainer>
        <Header />
        <HomePage />
      </HomePageContainer>
    ),
  },
  {
    path: "/destination",
    element: (
      <HomePageContainer>
        <Header />
      </HomePageContainer>
    ),
  },
  {
    path: "/crew",
    element: (
      <HomePageContainer>
        <Header />
      </HomePageContainer>
    ),
  },
  {
    path: "/technology",
    element: (
      <HomePageContainer>
        <Header />
      </HomePageContainer>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
