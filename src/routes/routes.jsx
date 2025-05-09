import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";
import Favorites from "../pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        hydrateFallbackElement: <p>Loading, please with...</p>,
        loader: () => fetch("../phones.json"),
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/phone-details/:id",
        element: <PhoneDetails />,
        hydrateFallbackElement: <p>Loading, please with...</p>,
        loader: () => fetch("../phones.json"),
      },
    ],
  },
]);
export default router;
