import { router,Link } from "@inertiajs/react";
import React, { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsListCheck,BsStickyFill,BsPlusLg } from "react-icons/bs";
import "../../css/Sidebar.css"
export default function Sidebar(second) {
    const navRef = useRef();
    const btnRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("toggled");
      btnRef.current.classList.toggle("btn-absolute");
    };
    return (
        <>
            <div ref={navRef} id="sidebar" className="bg-slate-300 p-6 rounded h-full flex flex-col w-[250px] ease-in transf ">
                <div className="flex items-center  justify-between mb-4 ">
                    <h1 className="font-bold text-xl">Menu</h1>
                   <button ref={btnRef} className="font-bold text-xl cursor-pointer" onClick={showNavbar}><GiHamburgerMenu /></button> 
                </div>
                <form className="flex items-center mb-6">
                    <label htmlFor="simple-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-slate-300 border border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                            placeholder="Search"
                            required
                        />
                    </div>
                 
                </form>

                <div className="mb-6">
                    <h2  className="font-bold">TASKS</h2>
                    <ul>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <Link
                            href=""
                            className="flex items-center text-md">
                            <MdOutlineDoubleArrow/><span className="ml-4 font-semibold hover:font-bold">Upcoming</span>
                        </Link>
                        <div className="px-2 rounded bg-slate-100">1</div>
                        </li>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <Link
                            href=""
                            className="flex items-center text-md">
                            <BsListCheck/><span className="ml-4 font-semibold hover:font-bold">Today</span>
                        </Link>
                        <div className="px-2 rounded bg-slate-100">1</div>
                        </li>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <Link
                            href=""
                            className="flex items-center text-md">
                            <BsStickyFill/><span className="ml-4 font-semibold hover:font-bold">Sticky Wall</span>
                        </Link>
                        <div className="px-2 rounded bg-slate-100">1</div>
                        </li>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <Link
                            href=""
                            className="flex items-center text-md">
                            <FaRegCalendarAlt/><span className="ml-4 font-semibold hover:font-bold">Calendar</span>
                        </Link>
                        <div className="px-2 rounded bg-slate-100">1</div>
                        </li>
                      
                    </ul>
                </div>
                <hr className="mb-6"/>
                <div className="mb-6">
                    <h2  className="font-bold">List</h2>
                    <ul>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <Link
                            href=""
                            className="flex items-center text-md">
                           <div className="h-4 w-4 bg-blue-300 rounded"></div><span className="ml-4 font-semibold hover:font-bold">Personal</span>
                        </Link>
                        <div className="px-2 rounded bg-slate-100">1</div>
                        </li>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <Link
                            href=""
                            className="flex items-center text-md">
                           <div className="h-4 w-4 bg-yellow-200 rounded"></div><span className="ml-4 font-semibold hover:font-bold">Personal</span>
                        </Link>
                        <div className="px-2 rounded bg-slate-100">1</div>
                        </li>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <Link
                            href=""
                            className="flex items-center text-md">
                           <div className="h-4 w-4 bg-red-400 rounded"></div><span className="ml-4 font-semibold hover:font-bold">Personal</span>
                        </Link>
                        <div className="px-2 rounded bg-slate-100">1</div>
                        </li>
                       
                      
                    </ul>
                    <div className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <Link
                            href=""
                            className="flex items-center text-md">
                            <BsPlusLg/><span className="ml-4 font-semibold hover:font-bold">Add New List</span>
                        </Link>
                     
                        </div>
                </div>
                <hr className="mb-6"/>
                <div className="mb-6 h-auto">
                    <h2  className="font-bold">List</h2>
                    
                    <div className="flex  flex-wrap gap-2">
                    <Link
                            href=""
                            className="flex items-center text-md  font-bold bg-red-400 rounded py-0.5 px-2 ">
                            Tag 1
                        </Link>
                    <Link
                            href=""
                            className="flex items-center text-md  font-bold bg-yellow-400 rounded py-0.5 px-2 ">
                            Tag 1
                        </Link>
                    <Link
                            href=""
                            className="flex items-center text-md  font-bold bg-blue-400 rounded py-0.5 px-2 ">
                            Tag 1
                        </Link>

                        <Link
                            href=""
                            className="flex items-center text-md  font-bold bg-slate-400 rounded py-0.5 px-2 ">
                            <BsPlusLg/><span className="ml-2 font-semibold hover:font-bold">Add Tag</span>
                        </Link>
                    </div>
                </div>
               <div  className="flex flex-row h-full"> 
               <ul className=" self-end  w-full">
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <Link
                            href=""
                            className="flex items-center text-md">
                            <BsPlusLg/><span className="ml-4 font-semibold hover:font-bold">Personal</span>
                        </Link>
                        
                        </li>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <Link
                            href=""
                            className="flex items-center text-md">
                            <BiLogOut/><span className="ml-4 font-semibold hover:font-bold">Logout</span>
                        </Link>
                        
                        </li>
                      
                       
                      
                    </ul>
               </div>
            </div>
        </>
    );
}
