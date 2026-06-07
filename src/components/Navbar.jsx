import React from 'react'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"} className={({ isActive }) => isActive ? "bg-[#244d3f] text-white" : ""}>
            <i className="fa-solid fa-house hidden sm:inline"></i>{/* ✅ CHANGED: hidden sm:inline */}
            Home</NavLink></li>

        <li><NavLink to={"/timeline"} className={({ isActive }) => isActive ? "bg-[#244d3f] text-white" : ""}>
            <i className="fa-regular fa-clock hidden sm:inline"></i>{/* ✅ CHANGED: hidden sm:inline */}
            Timeline</NavLink></li>

        <li><NavLink to={"/stats"} className={({ isActive }) => isActive ? "bg-[#244d3f] text-white" : ""}>
            <i className="fa-solid fa-chart-line hidden sm:inline"></i>{/* ✅ CHANGED: hidden sm:inline */}
            Stats</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm mx-auto px-4 md:px-8 lg:px-13">

            <div className="flex-1">
                <h2 className="text-lg md:text-2xl font-semibold text-[#1f2937]"> {/* ✅ CHANGED: text-2xl → text-lg md:text-2xl */}
                    Keen<span className='text-[#244d3f]'>Keeper</span>
                </h2>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2 md:gap-5"> {/* ✅ CHANGED: gap-5 → gap-2 md:gap-5 */}
                    {links}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;