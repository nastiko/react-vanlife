import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

// pages
import Home from  "./pages/Home";

// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
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
