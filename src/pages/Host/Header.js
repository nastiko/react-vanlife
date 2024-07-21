import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-[#FFF7ED] md:h-[110px] flex flex-col md:flex-row items-center pt-0 pb-10 md:py-5">
                <nav>
                    <NavLink className={({isActive}) => `navBtn ${isActive ? 'active-navBtn' : ''}`}
                             to="."
                             end>Dashboard</NavLink>
                    <NavLink className={({isActive}) => `navBtn ${isActive ? 'active-navBtn' : ''}`}
                             to="income">Income</NavLink>
                    <NavLink className={({isActive}) => `navBtn ${isActive ? 'active-navBtn' : ''}`}
                             to="host-vans">Vans</NavLink>
                    <NavLink className={({isActive}) => `navBtn ${isActive ? 'active-navBtn' : ''}`}
                             to="reviews">Reviews</NavLink>
                </nav>
            </header>
        </>

    )
}