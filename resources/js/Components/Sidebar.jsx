import { router, Link } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsListCheck, BsStickyFill, BsPlusLg } from "react-icons/bs";
import "../../css/Sidebar.css";
export default function Sidebar({listprops,tagprops,today,tomorrow,week,all}) {
  console.log(today);
  console.log(tomorrow);
  console.log(week);
  console.log(all);
    const [color, setColor] = useState("bg-[#38bdf8]");
    const [list, setList] = useState({
        nameList: "",
        color: color,
    });
    const [tag, setTag] = useState({
        nameTag: "",
        color: color,
    });

    const colorset = [
        "bg-[#38bdf8]",
        "bg-[#fda4af]",
        "bg-[#b91c1c]",
        "bg-[#fde047]",
        "bg-[#a855f7]",
        "bg-[#4ade80]",
        "bg-[#a1a1aa]",
    ];
    const navRef = useRef();

    const compTag = useRef();
    const compList = useRef();
    const btnRef = useRef();
    const colorTag = useRef();
    const listMenu = useRef();

    const listComp = () => {
        compList.current.classList.toggle("hidden");
    };
    const tagComp = () => {
        compTag.current.classList.toggle("hidden");
    };
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setList((list) => ({
            ...list,
            [key]: value,
            color: color,
        }));
    }
    function handleTagChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setTag((tag) => ({
            ...tag,
            [key]: value,
            color: color,
        }));
    }

    const submiTag = (e) => {
        e.preventDefault();

        router.post(route("save.tag"),tag);
        setTag((tag) => ({
            ...tag,
            nameTag: "",
        }));
    };
    const submiList = (e) => {
        e.preventDefault();

        router.post(route("save.list"), list);
        setList((list) => ({
            ...list,
            nameList: "",
        }));
    };
  
    const showNavbar = () => {
        navRef.current.classList.toggle("toggled");
        btnRef.current.classList.toggle("btn-absolute");
    };
    const changeColor = (value, old) => {
        colorTag.current.classList.remove(old);
        setColor(value);
    };
    useEffect(() => {
        // Update the document title using the browser API

        colorTag.current.classList.add(color);
    });

    return (
        <>
            <div
                ref={navRef}
                id="sidebar"
                className="bg-slate-300 p-6 rounded h-full flex flex-col w-[250px] ease-in toggled md:relative  absolute "
            >
                <div className="flex items-center  justify-between mb-4 ">
                    <h1 className="font-bold text-xl">Menu</h1>
                    <button
                        ref={btnRef}
                        className="font-bold text-xl cursor-pointer btn-absolute "
                        onClick={showNavbar}
                    >
                        <GiHamburgerMenu />
                    </button>
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
                    <h2 className="font-bold">TASKS</h2>
                    <ul>
                    <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                            <Link href={route('home')} className="flex items-center text-md">
                                <BsListCheck />
                                <span className="ml-4 font-semibold hover:font-bold">
                                    All Task
                                </span>
                            </Link>
                            <div className="px-2 rounded bg-slate-100">{all}</div>
                        </li>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                            <Link   href={route('upcoming')} className="flex items-center text-md">
                                <MdOutlineDoubleArrow />
                                <span className="ml-4 font-semibold hover:font-bold">
                                    Upcoming
                                </span>
                            </Link>
                            <div className="px-2 rounded bg-slate-100">{today+tomorrow+week}</div>
                        </li>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                            <Link  href={route('today')} className="flex items-center text-md">
                                <BsListCheck />
                                <span className="ml-4 font-semibold hover:font-bold">
                                    Today
                                </span>
                            </Link>
                            <div className="px-2 rounded bg-slate-100">{today}</div>
                        </li>
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                            <Link href="" className="flex items-center text-md">
                                <BsStickyFill />
                                <span className="ml-4 font-semibold hover:font-bold">
                                    Sticky Wall
                                </span>
                            </Link>
                            <div className="px-2 rounded bg-slate-100">1</div>
                        </li>
                    </ul>
                </div>
                <hr className="mb-6" />
                <h2 className="font-bold">List</h2>
                <div className="mb-6 overflow-y-auto min-h-[7rem] md:min-h-[10rem] ">
                    <ul className=" ">
                        {listprops.map((index, key) => {
                            //    current.classList.add(index.color)
                            return (
                                <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                                    <Link
                                        href={route('list',index.id)}
                                        className="flex items-center text-md"
                                    >
                                        <div
                                            className={`h-4 w-4 rounded ${index.color}`}
                                        ></div>
                                        <span className="ml-4 font-semibold hover:font-bold">
                                            {index.name}
                                        </span>
                                    </Link>
                                    <div className="px-2 rounded bg-slate-100">
                                        1
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                        <button
                            onClick={() => listComp()}
                            className="flex items-center text-md w-full"
                        >
                            <BsPlusLg />
                            <span className="ml-4 font-semibold hover:font-bold">
                                Add New List
                            </span>
                        </button>
                    </div>
                    <div
                        ref={compList}
                        className="absolute bg-white p-2 rounded hidden -mt-80"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div>Add New List</div>
                            <div
                                className="px-2 rounded text-right  hover:font-semibold cursor-pointer"
                                onClick={() => listComp()}
                            >
                                X
                            </div>
                        </div>

                        <form action="" onSubmit={submiList} >
                            <div className="flex gap-4 mb-4">
                                <div
                                    ref={colorTag}
                                    className={`h-4 w-4 ${color} rounded`}
                                ></div>
                                <input
                                    id="nameList"
                                    className="mx-auto h-4 text-xs rounded border-1 border-slate-300 focus:border-slate-300"
                                    type="text"
                                    value={list.nameList}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-2 flex-wrap items-center justify-center">
                                {colorset.map((index) => {
                                
                                    return (
                                        <div
                                            className={`h-4 w-4 rounded ${index} cursor-pointer`}
                                            onClick={() =>
                                                changeColor(index, color)
                                            }
                                        ></div>
                                    );
                                })}

                                
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-800 mt-5 bottom-0 rounded text-white"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="mb-6" />
                <div className="mb-6 h-auto">
                    <h2 className="font-bold">Tags</h2>

                    <div className="flex  flex-wrap gap-2">
                    {tagprops.map((index, key) => {
                            //    current.classList.add(index.color)
                            return (
                                <Link
                            href=""
                            className="flex items-center text-md  font-bold bg-red-400 rounded py-0.5 px-2 "
                        >
                            {index.name}
                        </Link>
                            );
                        })}
                        

                        <button
                             onClick={() => tagComp()}
                            className="flex items-center text-md  font-bold bg-slate-400 rounded py-0.5 px-2 "
                        >
                            <BsPlusLg />
                            <span className="ml-2 font-semibold hover:font-bold">
                                Add Tag
                            </span>
                        </button>
                         <div
                        ref={compTag}
                        className="absolute bg-white p-2 rounded hidden -mt-36"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div>Add New Tag</div>
                            <div
                                className="px-2 rounded text-right  hover:font-semibold cursor-pointer"
                                onClick={() => tagComp()}
                            >
                                X
                            </div>
                        </div>

                        <form action="" onSubmit={submiTag} >
                            <div className="flex gap-4 mb-4">
                                <div
                                    ref={colorTag}
                                    className="h-4 w-4 rounded"
                                ></div>
                                <input
                                    id="nameTag"
                                    className="mx-auto h-4 text-xs rounded border-1 border-slate-300 focus:border-slate-300"
                                    type="text"
                                    value={tag.nameTag}
                                    onChange={handleTagChange}
                                />
                            </div>
                            <div className="flex gap-2 flex-wrap items-center justify-center">
                                {colorset.map((index) => {
                                 
                                    return (
                                        <div
                                            className={`h-4 w-4 rounded ${index} cursor-pointer`}
                                            onClick={() =>
                                                changeColor(index, color)
                                            }
                                        ></div>
                                    );
                                })}

                                
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-800 mt-5 bottom-0 rounded text-white"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="flex flex-row h-full">
                    <ul className=" self-end  w-full">
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                            <Link href="" className="flex items-center text-md">
                                <BiLogOut />
                                <span className="ml-4 font-semibold hover:font-bold">
                                    Logout
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
