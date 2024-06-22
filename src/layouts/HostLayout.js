import { Outlet } from 'react-router-dom';
import Header from '../pages/Host/Header';

export default function HostLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}