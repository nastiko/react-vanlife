import {NavLink} from "react-router-dom";

export default function HostVansHeader() {

    return (
        <>
            <header className="flex items-center py-5">
                <nav>
                    <NavLink className={({isActive}) => `navBtn ${isActive ? 'active-navBtn' : ''}`}
                             to="."
                             end>Details</NavLink>
                    <NavLink className={({isActive}) => `navBtn ${isActive ? 'active-navBtn' : ''}`}
                             to="price"
                             end>Price</NavLink>
                    <NavLink className={({isActive}) => `navBtn ${isActive ? 'active-navBtn' : ''}`}
                             to="photos"
                             end>Photos</NavLink>

                </nav>
            </header>
        </>

    )
}