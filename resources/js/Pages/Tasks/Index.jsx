import CreateTask from "@/Components/CreateTask";
import EditTask from "@/Components/EditTask";
import Template from "@/Layouts/Template";
import { router, Head,usePage } from "@inertiajs/react";
import { useRef, useState } from "react";
import { FaPlus, FaCalendarAlt } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import React, { useEffect } from "react";
import {BsInfoSquareFill } from "react-icons/bs";
export default function Index(props) {
    const [isClosed, setClosed] = useState(true);
    const [isEdit, setEdit] = useState(false);
    const [values, setValues] = useState({
        id: "",
        title: "",
        description: "",

        list: "",
        date: "",
    });
  

    const currentBtn = useRef();
    const finishBtn = useRef();
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(1);

    // Set the "data" value to "props.tasks" using useEffect
    useEffect(() => {
        setData(props.tasks);
    }, [props.tasks]);
 
    function resetValue() {
        setValues((values) => ({
            ...values,
            id: "",
            title: "",
            description: "",

            list: "",
            date: "",
        }));
    }
    function updateValue(newValue) {
        console.log(newValue);
        setClosed(newValue);
    }

    const openCreate = () => {
        setEdit(false);

        resetValue();
        if (isClosed) {
            setClosed(false);
        } else {
            setClosed(true);
        }
    };
    function switchData(val) {
        if (val == 1) {
            setData(props.tasks);
            setStatus(1);
        } else if (val == 2) {
            setData(props.finish);
            setStatus(2);
        }
    }
    const openEdit = (
        valId,
        valTitle,
        valDescription,

        valList,
        valDate
    ) => {
        setEdit(true);
        if (valId === undefined) {
            valId = "";
        }
        if (valTitle === undefined) {
            valTitle = "";
        }
        if (valDescription === undefined) {
            valDescription = "";
        }

        if (valList === undefined) {
            valList = "";
        }
        if (valDate === undefined) {
            valDate = "";
        }
        setValues({
            id: valId,
            title: valTitle,
            description: valDescription,
            list: valList,
            date: valDate,
        });
        if (isClosed) {
            setClosed(false);
        } else {
            setClosed(true);
        }
    };

    const finished = (id) => {
        router.put(route("finish.task", id));
    };

    return (
        <>
            <Template
                list={props.list}
                today={props.countToday}
                week={props.countWeek}
                tomorrow={props.countTomorrow}
                all={props.count}
                flash={props.flash}
            >
                <Head title="Todo-List" />
       
                <div className="flex h-full max-h-screen rounded-lg">
                    <div className="p-6 w-full  bg-white ">
                        <div className="text-4xl font-bold flex gap-4 mb-8 max-h-[20%] ">
                            <h1 className="">All Task</h1>
                            <div className="px-2 rounded text-center bg-gray-300">
                                {props.count}
                            </div>
                        </div>
                        <div className="max-h-[80%] h-full ">
                            <div className="w-full">
                                <button
                                    className="w-full flex items-center border border-slate-500 active:bg-[#0A81D1] hover:bg-[#D1F5FF]  active:text-white p-4 gap-4 rounded"
                                    onClick={() => openCreate()}
                                >
                                    <FaPlus />
                                    Add New Task
                                </button>
                            </div>
                            <nav className="flex border-b border-gray-100 text-sm font-medium">
                                <button
                                    ref={currentBtn}
                                    onClick={() => switchData(1)}
                                    className={`-mb-px border-b ${
                                        data == props.tasks
                                            ? "border-current  text-cyan-500"
                                            : "border-transparent hover:text-cyan-500"
                                    }  p-4`}
                                >
                                    Current
                                </button>
                                <button
                                    ref={finishBtn}
                                    onClick={() => switchData(2)}
                                    className={`-mb-px border-b ${
                                        data == props.finish
                                            ? "border-current  text-cyan-500"
                                            : "border-transparent hover:text-cyan-500"
                                    }  p-4`}
                                >
                                    Completed
                                </button>
                            </nav>

                            <div className="h-full  overflow-y-auto ">
                                {data.length>0?(data.map((index) => {
                                    // console.log(index);
                                    return (
                                        <>
                                            <div
                                                className={`flex justify-between ${
                                                    index.status == "running"
                                                        ? "cursor-pointer"
                                                        : ""
                                                } items-center p-4 `}
                                            >
                                                <div className="flex gap-6 w-full">
                                                    <form action="">
                                                        <input
                                                            type="checkbox"
                                                            name=""
                                                            id=""
                                                            onChange={() =>
                                                                finished(
                                                                    index.id
                                                                )
                                                            }
                                                            checked={
                                                                index.status ==
                                                                `finished`
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                    </form>
                                                    <div
                                                        onClick={
                                                            index.status ==
                                                            "running"
                                                                ? () =>
                                                                      openEdit(
                                                                          index.id,
                                                                          index.title,
                                                                          index.description,

                                                                          index
                                                                              .list
                                                                              .id,
                                                                          index.date
                                                                      )
                                                                : ""
                                                        }
                                                        className="w-full"
                                                    >
                                                        <h1
                                                            className={`font-bold text-xl mb-2 ${
                                                                index.status ==
                                                                `finished`
                                                                    ? "line-through"
                                                                    : ""
                                                            }`}
                                                        >
                                                            {index.title}
                                                        </h1>
                                                        <div className="flex gap-2">
                                                            <div className="flex items-center gap-2 text-sm font-semibold mr-4">
                                                                <FaCalendarAlt />
                                                                {index.date}
                                                            </div>

                                                            <div className="flex items-center gap-2 text-sm font-semibold mr-4">
                                                                <div
                                                                    className={`h-4 w-4 ${index.list.color} rounded`}
                                                                ></div>
                                                                {
                                                                    index.list
                                                                        .name
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {index.status == "running" ? (
                                                    <button
                                                        onClick={() =>
                                                            openEdit(
                                                                index.id,
                                                                index.title,
                                                                index.description,

                                                                index.list.id,
                                                                index.date
                                                            )
                                                        }
                                                    >
                                                        <MdNavigateNext />
                                                    </button>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                            <hr />
                                        </>
                                    );
                                })):(  <div className="w-full h-full flex flex-col">
                                 
                                    <div className="flex grow justify-center items-center p-4">
                                        <div className="text-center text-7xl text-[#2C3333]/75 font-bold">
                                        <BsInfoSquareFill className="mx-auto mb-8"/>
                                {status ==1?' No Task on this Category!':" No Task on this completed!"}
                                        </div>
                                </div></div>)}
                            </div>
                        </div>
                    </div>
                    {isEdit ? (
                        <EditTask
                            values={values}
                            list={props.list}
                            closed={isClosed}
                            onChange={updateValue}
                            onSubmit={resetValue}
                        />
                    ) : (
                        <CreateTask
                            values={values}
                            list={props.list}
                            closed={isClosed}
                            onChange={updateValue}
                            onSubmit={resetValue}
                        />
                    )}
                </div>
            </Template>
        </>
    );
}
