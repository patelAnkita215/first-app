import {createBrowserRouter} from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";
import ContactPage from "./contact";
import HeaderComp from "./header";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderComp/><HomePage/></>,
    },
    {
        path: "/about",
        element: <><HeaderComp/><AboutPage></AboutPage></>,
    },
    {
        path: "/contact",
        element: <><HeaderComp/><ContactPage/></>,
    },
]);


export default MainRouter;