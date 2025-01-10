import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { RouterProvider } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
    },
  }
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider
    future={{
      v7_startTransition: true,
    }}
    router={appRouter}
  />
);
