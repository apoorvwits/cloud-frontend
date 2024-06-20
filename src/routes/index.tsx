import { Navigate, createBrowserRouter } from "react-router-dom";
import PageNotFound from "../components/page-not-found";
import Layout from "../screens/layout";
import MyDrive from "../screens/layout/my-drive";
import Home from "../screens/Home";
import Login from "../screens/auth/login";

export default createBrowserRouter([
    {
        path: "login",
        element: <Login />,
        errorElement: <PageNotFound />
    },
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "home",
                element: <MyDrive />,
                errorElement: <PageNotFound />
            },
            {
                path: "activity",
                element: <MyDrive />,
                errorElement: <PageNotFound />
            },
            {
                path: "my-drive",
                element: <MyDrive />,
                errorElement: <PageNotFound />
            },
            {
                path: "test",
                element: <Home />,
                errorElement: <PageNotFound />
            }
        ],
        errorElement: <PageNotFound />
    },
    {
        path: "*",
        element: <Navigate to="/test" />,
        errorElement: <PageNotFound />
    },
]);  
