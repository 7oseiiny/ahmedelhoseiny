import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import Products from "../components/products/products";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        index:true,
        element: <Products />
      }
    ],
  },
]);
