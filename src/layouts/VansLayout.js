import HostVansHeader from '../pages/Host/pages/Vans/HostVansHeader';
import { Outlet } from "react-router-dom";

export default function VansLayout({context}) {
    return (
        <>
            <HostVansHeader />
            <main>
                <Outlet context={context} />
            </main>
        </>
    )
}