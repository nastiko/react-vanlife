import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-[#FFF7ED] h-[110px] flex items-center py-5">
                <nav>
                    <NavLink className={({isActive}) => `font-normal text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5 ${isActive ? 'font-semibold underline decoration-2' : ''}`}
                             to="."
                             end>Dashboard</NavLink>
                    <NavLink className={({isActive}) => `font-normal text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5 ${isActive ? 'font-semibold underline decoration-2' : ''}`}
                             to="income">Income</NavLink>
                    <NavLink className={({isActive}) => `font-normal text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5 ${isActive ? 'font-semibold underline decoration-2' : ''}`}
                             to="host-vans">Vans</NavLink>
                    <NavLink className={({isActive}) => `font-normal text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5 ${isActive ? 'font-semibold underline decoration-2' : ''}`}
                             to="reviews">Reviews</NavLink>
                </nav>
            </header>
        </>

    )
}