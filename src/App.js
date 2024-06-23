import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import "./server";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import VansList from "./pages/Vans/VansList";
import VanDetail from "./pages/Vans/VanDetail";
import NotFound from "./pages/NotFound";

// host pages
import Dashboard from "./pages/Host/pages/Dashboard";
import Income from "./pages/Host/pages/Income";
import Reviews from "./pages/Host/pages/Reviews";
import HostVansList from "./pages/Host/pages/Vans/HostVansList";
import HostVansInfo from "./pages/Host/pages/Vans/HostVansInfo";
import HostVansDetails from "./pages/Host/pages/Vans/HostVansDetails";
import VansPricing from "./pages/Host/pages/Vans/HostVansPricing";
import HostVansPhotos from "./pages/Host/pages/Vans/HostVansPhotos";

// layouts
import RootLayout from "./layouts/RootLayout";
import HostLayout from "./layouts/HostLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>

            <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />}/>
                <Route path="income" element={<Income />}/>

                <Route path="host-vans">
                    <Route index element={<HostVansList />}/>
                    <Route path=":id" element={<HostVansInfo />}>
                        <Route index element={<HostVansDetails />}/>
                        <Route path="price" element={<VansPricing />}/>
                        <Route path="photos" element={<HostVansPhotos />}/>
                    </Route>
                </Route>

                <Route path="reviews" element={<Reviews />}/>
            </Route>

            <Route path="about" element={<About/>}/>
            <Route path="vans">
                <Route index element={<VansList/>} />
                <Route path=":id" element={<VanDetail/>}/>
            </Route>

            <Route path="*" element={<NotFound />} />
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
