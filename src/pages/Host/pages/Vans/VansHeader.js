import {NavLink} from "react-router-dom";

export default function VansHeader() {
    return (
        <>
            <header className="flex items-center py-5">
                <nav>
                    <NavLink className={({isActive}) => `font-normal text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] pr-5 ${isActive ? 'font-semibold underline decoration-2' : ''}`}
                             to="."
                             end>Details</NavLink>
                    <NavLink className={({isActive}) => `font-normal text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5 ${isActive ? 'font-semibold underline decoration-2' : ''}`}
                             to="price"
                             end>Price</NavLink>
                    <NavLink className={({isActive}) => `font-normal text-[#4D4D4D] hover:underline hover:decoration-2 py-[5px] px-5 ${isActive ? 'font-semibold underline decoration-2' : ''}`}
                             to="photos"
                             end>Photos</NavLink>

                </nav>
            </header>
        </>

    )
}