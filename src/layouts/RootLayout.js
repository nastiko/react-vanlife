import { Link, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <header className="bg-[#FFF7ED] h-[110px] flex items-center justify-between p-5">
                <Link className="text-[25px] font-bold text-[#000000] uppercase hover:underline hover:decoration-2" to="/">#VANLIFE</Link>
                <nav>
                    <NavLink className="font-medium text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5" to="about">About</NavLink>
                    <NavLink className="font-medium text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5" to="vans">Vans</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}