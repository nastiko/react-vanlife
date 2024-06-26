import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import VansList, {loader as vansLoader} from "./pages/Vans/VansList";
import VanDetail, {loader as vansDetailLoader} from "./pages/Vans/VanDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Error from "./components/Error";

// host pages
import Dashboard from "./pages/Host/pages/Dashboard";
import Income from "./pages/Host/pages/Income";
import Reviews from "./pages/Host/pages/Reviews";
import HostVansList, {loader as hostVansLoader} from "./pages/Host/pages/Vans/HostVansList";
import HostVansInfo, {loader as hostVansInfo} from "./pages/Host/pages/Vans/HostVansInfo";
import HostVansDetails from "./pages/Host/pages/Vans/HostVansDetails";
import VansPricing from "./pages/Host/pages/Vans/HostVansPricing";
import HostVansPhotos from "./pages/Host/pages/Vans/HostVansPhotos";

// layouts
import RootLayout from "./layouts/RootLayout";
import HostLayout from "./layouts/HostLayout";

import "./server";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>

            <Route>
                <Route
                    path="host"
                    element={<HostLayout/>}>
                    <Route
                        index
                        element={<Dashboard/>}
                        loader={async () => await requireAuth()}
                    />
                    <Route
                        path="income"
                        element={<Income/>}
                        loader={async () => await requireAuth()}
                    />

                    <Route
                        loader={hostVansLoader}
                        path="host-vans"
                        element={<HostVansList/>}/>
                    <Route
                        loader={hostVansInfo}
                        path="host-vans/:id"
                        element={<HostVansInfo/>}>
                        <Route
                            loader={async () => await requireAuth()}
                            index
                            element={<HostVansDetails/>}/>
                        <Route
                            loader={async () => await requireAuth()}
                            path="price"
                            element={<VansPricing/>}/>
                        <Route
                            loader={async () => await requireAuth()}
                            path="photos"
                            element={<HostVansPhotos/>}/>
                    </Route>

                    <Route
                        path="reviews"
                        element={<Reviews/>}
                        loader={async () => await requireAuth()}
                    />
                </Route>
            </Route>

            <Route path="about" element={<About/>}/>
            <Route path="login" element={<Login/>}/>

            <Route
                path="vans"
                element={<VansList/>}
                errorElement={<Error/>}
                loader={vansLoader}
            />
            <Route
                path="vans/:id"
                element={<VanDetail/>}
                loader={vansDetailLoader}
            />

            <Route path="*" element={<NotFound/>}/>
        </Route>
    )
)

export default function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}
