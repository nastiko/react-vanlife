import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

// pages
import Home from  "./pages/Home";
import About from  "./pages/About";
import Vans from "./pages/Vans"

// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
        </Route>
    )
)

export default function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}
