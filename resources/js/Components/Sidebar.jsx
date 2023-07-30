import { router, Link } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsListCheck, BsStickyFill, BsPlusLg } from "react-icons/bs";
import "../../css/Sidebar.css";

import {textColor,listHover} from '../values/Color'
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


    const [labelColor, setLabelColor] = useState("text-[#2C3333]");
    const [labelbg, setLabelbg] = useState("bg-white");

    const navRef = useRef();

    const compTag = useRef();
    const compList = useRef();
    const btnRef = useRef();
    const btnTog = useRef();
    const colorTag = useRef();
    const listMenu = useRef();

    const listComp = () => {
        compList.current.classList.toggle("hidden");
        if (labelColor == "text-white") {
            setLabelColor("text-[#2C3333]")
            
        }else{
            setLabelColor("text-white")

        }
        if (labelbg == "bg-[#0A81D1]") {
            setLabelbg("bg-white")
            
        }else{
            setLabelbg("bg-[#0A81D1]")

        }
        
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
        btnRef.current.classList.toggle("hidden");
        btnTog.current.classList.toggle("hidden");
       
    };
    const changeColor = (value, old) => {
        colorTag.current.classList.remove(old);
        setColor(value);
    };
    useEffect(() => {
        colorTag.current.classList.add(color);
    });

    return (
        <>
                
                 <button
                      ref={btnTog}  
                        className="font-bold text-xl cursor-pointer fixed -translate-y-2/4 top-2/4 bg-[#000] rounded-r-[50%] px-2 py-4"
                        onClick={showNavbar}
                    >
                        <GiHamburgerMenu className="text-white"/>
                    </button>
            
           <div className="pl-8 py-8 toggled md:relative  absolute ease-in duration-100"
           ref={navRef}
           id="sidebar">
           <div
                
                className="bg-white shadow-lg p-6 rounded-3xl h-full flex flex-col w-[250px] "
            >
                <div className="flex items-center  justify-between mb-4 ">
                    <h1 className="font-bold text-xl">Menu</h1>
                    <button
                        ref={btnRef}
                        className="font-bold text-xl cursor-pointer btn-absolute hidden"
                        onClick={showNavbar}
                    >
                        <GiHamburgerMenu className={`text-[${textColor}]`} />
                    </button>
                </div>
              

                <div className="mb-6">
                    <h2 className="font-bold text-md">Tasks</h2>
                    <ul>
                    <li className={` group w-full p-2  rounded hover:bg-[${listHover}] flex justify-between`}>
                            <Link href={route('home')} className="w-full flex items-center text-md">
                                <BsListCheck />
                                <span className="ml-4 font-semibold group-hover:font-bold">
                                    All Task
                                </span>
                            </Link>
                            <div className={`px-2 rounded bg-slate-200 group-hover:bg-[#78E3FD]`}>{all}</div>
                        </li>
                        <li className={`group w-full p-2 rounded hover:bg-[${listHover}] flex justify-between`}>
                            <Link   href={route('upcoming')} className="w-full flex items-center text-md">
                                <MdOutlineDoubleArrow />
                                <span className="ml-4 font-semibold group-hover:font-bold">
                                    Upcoming
                                </span>
                            </Link>
                            <div className={`px-2 rounded bg-slate-200 group-hover:bg-[#78E3FD]`}>{today+tomorrow+week}</div>
                        </li>
                        <li className={`group w-full p-2  rounded hover:bg-[${listHover}] flex justify-between`}>
                            <Link  href={route('today')} className="w-full flex items-center text-md">
                                <BsListCheck />
                                <span className="ml-4 font-semibold group-hover:font-bold">
                                    Today
                                </span>
                            </Link>
                            <div className={`px-2 rounded bg-slate-200 group-hover:bg-[#78E3FD]`}>{today}</div>
                        </li>
                        <li className={`group w-full p-2  rounded hover:bg-[${listHover}] flex justify-between`}>
                            <Link href="" className="w-full flex items-center text-md">
                                <BsStickyFill />
                                <span className="ml-4 font-semibold group-hover:font-bold">
                                    Sticky Wall
                                </span>
                            </Link>
                            <div className={`px-2 rounded bg-slate-200 group-hover:bg-[#78E3FD]`}>1</div>
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
                                <li className={`w-full p-2  rounded hover:bg-[${listHover}] flex justify-between`}>
                                    <Link
                                        href={route('list',index.slug)}
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
                   <div className="">
                     <div className={`w-full p-2  rounded hover:bg-[${listHover}] flex justify-between ${labelbg} ${labelColor} hover:text-[#2C3333]`}>
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
                        className="absolute left-56 bg-white p-2 rounded hidden ease-in duration-300 shadow-lg"
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
                </div>
                <hr className="mb-6" />
            
                <div className="flex flex-row h-full">
                    <ul className=" self-end  w-full">
                        <li className="w-full p-2  rounded hover:bg-slate-400 flex justify-between">
                            <Link href={route('logout')}method="post" className="flex items-center text-md">
                                <BiLogOut />
                                <span className="ml-4 font-semibold hover:font-bold">
                                    Logout
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
           </div>
        </>
    );
}
