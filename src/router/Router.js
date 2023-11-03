import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/home/Home";
import {PopularPage} from "../pages/popular/Popular";
import {RecentPage} from "../pages/recent/Recent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/popular",
        element: <PopularPage/>,
    },
    {
        path: "/recent",
        element: <RecentPage/>,
    },
])