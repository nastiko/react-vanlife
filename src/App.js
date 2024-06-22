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
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";

// host pages
import Dashboard from "./pages/Host/pages/Dashboard";
import Income from "./pages/Host/pages/Income";
import Reviews from "./pages/Host/pages/Reviews";
import VansList from "./pages/Host/pages/Vans/VansList";
import VansInfo from "./pages/Host/pages/Vans/VansInfo";
import VansDetails from "./pages/Host/pages/Vans/VansDetails";
import VansPricing from "./pages/Host/pages/Vans/VansPricing";
import VansPhotos from "./pages/Host/pages/Vans/VansPhotos";

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
                    <Route index element={<VansList />}/>
                    <Route path=":id" element={<VansInfo />}>
                        <Route index element={<VansDetails />}/>
                        <Route path="price" element={<VansPricing />}/>
                        <Route path="photos" element={<VansPhotos />}/>
                    </Route>

                </Route>

                <Route path="reviews" element={<Reviews />}/>
            </Route>

            <Route path="about" element={<About/>}/>
            <Route path="vans">
                <Route index element={<Vans/>} />
                <Route path=":id" element={<VanDetail/>}/>
            </Route>
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
