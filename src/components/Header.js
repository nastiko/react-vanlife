import {Link, NavLink} from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className="bg-[#FFF7ED] h-[110px] flex items-center justify-between p-5">
                <Link className="text-[25px] font-bold text-[#000000] uppercase hover:underline hover:decoration-2" to="/">#VANLIFE</Link>
                <nav>
                    <NavLink className={({isActive}) => `font-medium text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5 ${isActive ? 'font-semibold underline decoration-2' : ''}`} to="host">Host</NavLink>
                    <NavLink className={({isActive}) => `font-medium text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5 ${isActive ? 'font-semibold underline decoration-2' : ''}`} to="about">About</NavLink>
                    <NavLink className={({isActive}) => `font-medium text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5 ${isActive ? 'font-semibold underline decoration-2' : ''}`} to="vans">Vans</NavLink>
                </nav>
            </header>
        </>
    )
}