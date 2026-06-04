import React from 'react'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"} className={({ isActive }) => isActive ? "bg-[#244d3f] text-white" : ""}>
            <i className="fa-solid fa-house"></i>Home</NavLink></li>

        <li><NavLink to={"/timeline"} className={({ isActive }) => isActive ? "bg-[#244d3f] text-white" : ""}>
            <i className="fa-regular fa-clock"></i>Timeline</NavLink></li>

        <li><NavLink to={"/stats"} className={({ isActive }) => isActive ? "bg-[#244d3f] text-white" : ""}>
            <i className="fa-solid fa-chart-line"></i>Stats</NavLink></li>


    </>




    return (

        <div className="navbar bg-base-100 shadow-sm mx-auto px-13">
            <div className="flex-1">
                <h2 className=" text-2xl font-semibold text-[#1f2937] ">Keen<span className='text-[#244d3f]'>Keeper</span></h2>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {/* <li>Home</li>
                    <li>Timeline</li>
                    <li>Stats</li> */}
                    {links}
                </ul>
            </div>
        </div>

    )
}

export default Navbar;