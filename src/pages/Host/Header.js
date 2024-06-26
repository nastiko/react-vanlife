import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-[#FFF7ED] h-[110px] flex items-center py-5">
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