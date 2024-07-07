// eslint-disable-next-line no-unused-vars
import {createBrowserRouter, Navigate} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Main from "./pages/Main/Main.jsx";
import BaseLayout from "./layouts/BaseLayout.jsx";
import {MangaPage} from "./pages/news/ui/index.js";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
        errorElement: <div>Error :(</div>,
        children: [
            {
                path: "/",
                element: <Navigate to={'/1/all'} replace={true}/>
            },
            {
                path: "/manga/:id",
                element: <MangaPage/>
            },
            {
                path: "/:page/:category",
                element: <Main/>
            },
        ],
    },
]);
export default appRouter;
