import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-[#FFF7ED] h-[110px] flex items-center p-5">
                <nav>
                    <NavLink className="font-normal text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5" to="host">Dashboard</NavLink>
                    <NavLink className="font-normal text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5" to="income">Income</NavLink>
                    <NavLink className="font-normal text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5" to="reviews">Reviews</NavLink>
                </nav>
            </header>
        </>

    )
}