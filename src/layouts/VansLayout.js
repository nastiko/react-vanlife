import VansHeader from '../pages/Host/pages/Vans/VansHeader';
import { Outlet } from "react-router-dom";

export default function VansLayout({context}) {
    return (
        <>
            <VansHeader />
            <main>
                <Outlet context={context} />
            </main>
        </>
    )
}