import {Link, NavLink} from "react-router-dom";
import imageUrl from "../assets/images/user-login.svg";

export default function Header() {
    return (
        <>
            <header className="bg-[#FFF7ED] h-[110px] flex items-center justify-between p-5">
                <Link className="text-[25px] font-bold text-[#000000] uppercase hover:underline hover:decoration-2" to="/">#VANLIFE</Link>
                <nav className="flex items-center justify-between">
                    <NavLink className={({isActive}) => `navBtn ${isActive ? 'active-navBtn' : ''}`} to="host">Host</NavLink>
                    <NavLink className={({isActive}) => `navBtn ${isActive ? 'active-navBtn' : ''}`} to="about">About</NavLink>
                    <NavLink className={({isActive}) => `navBtn ${isActive ? 'active-navBtn' : ''}`} to="vans">Vans</NavLink>
                    <Link to="login">
                        <img src={imageUrl} alt="User Login" />
                    </Link>
                </nav>
            </header>
        </>
    )
}