import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Pricing from "../pages/Pricing/Pricing";
import About from "../pages/About/About";
import Dashboard from "../layouts/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import { element } from "prop-types";
import Users from "../pages/Dashboard/Users/Users";
import Countries from "../pages/Dashboard/Countries/Countries";
import Universities from "../pages/Dashboard/Universities/Universities";
import Courses from "../pages/Dashboard/Courses/Courses";
import Applications from "../pages/Dashboard/Applications/Applications";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      { path: "/signup", element: <SignUp /> },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <AdminHome />,
      },

      {
        path: "users",
        element: <Users />,
      },
      {
        path: "countries",
        element: <Countries />,
      },
      {
        path: "universities",
        element: <Universities />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "applications",
        element: <Applications />,
      },
    ],
  },
]);

export default router;
