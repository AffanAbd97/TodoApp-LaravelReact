import CreateTask from "@/Components/CreateTask";
import EditTask from "@/Components/EditTask";
import Template from "@/Layouts/Template";
import { router, Head } from "@inertiajs/react";
import { useRef, useState } from "react";
import { FaPlus, FaCalendarAlt } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
export default function Upcoming(props) {
    const [isClosed, setClosed] = useState(true);
    const [isEdit, setEdit] = useState(false);
    const [values, setValues] = useState({
        id: "",
        title: "",
        description: "",

        list: "",
        date: "",
    });

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
    const openEdit = (valId, valTitle, valDescription, valList, valDate) => {
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
                task={props.tasks}
            >
                <Head title="Todo-List" />
                <div className="flex h-full max-h-screen">
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="p-6 w-full bg-white rounded-lg shadow-md col-span-2">
                            <div className="text-4xl font-bold flex gap-4 mb-8 max-h-[20%] ">
                                <h1 className="">Today</h1>
                                <div className="px-2 rounded text-center bg-gray-300">
                                    {props.today.length}
                                </div>
                            </div>
                            <div className="max-h-[80%] h-full ">
                                <div className="h-full  overflow-y-auto ">
                                    {props.today.length > 0 ? (
                                        props.today.map((index) => {
                                            // console.log(index);
                                            return (
                                                <>
                                                    <div className="flex justify-between items-center p-4 ">
                                                        <div className="flex gap-6">
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
                                                            <div>
                                                                <h1
                                                                    className={`font-bold text-xl mb-2 ${
                                                                        index.status ==
                                                                        `finished`
                                                                            ? "line-through"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    {
                                                                        index.title
                                                                    }
                                                                </h1>
                                                                <div className="flex gap-2">
                                                                    <div className="flex items-center gap-2 text-sm font-semibold mr-4">
                                                                        <FaCalendarAlt />
                                                                        {
                                                                            index.date
                                                                        }
                                                                    </div>

                                                                    <div className="flex items-center gap-2 text-sm font-semibold mr-4">
                                                                        <div className="h-4 w-4 bg-yellow-200 rounded"></div>
                                                                        {
                                                                            index
                                                                                .list
                                                                                .name
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() =>
                                                                openEdit(
                                                                    index.id,
                                                                    index.title,
                                                                    index.description,
                                                                    index.list
                                                                        .id,
                                                                    index.date
                                                                )
                                                            }
                                                        >
                                                            <MdNavigateNext />
                                                        </button>
                                                    </div>
                                                    <hr />
                                                </>
                                            );
                                        })
                                    ) : (
                                        <div className="w-full h-full flex flex-col">
                                            <div className="flex grow justify-center items-center p-4">
                                                <div className="text-center text-7xl text-[#2C3333]/75 font-bold">
                                                    <BsInfoSquareFill className="mx-auto mb-8" />
                                                    No Task Today!
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 w-full bg-white rounded-lg shadow-md ">
                            <div className="text-4xl font-bold flex gap-4 mb-8 max-h-[20%] ">
                                <h1 className="">Tomorrow</h1>
                                <div className="px-2 rounded text-center bg-gray-300">
                                    {props.tomorrow.length}
                                </div>
                            </div>
                            <div className="max-h-[80%] h-full ">
                                <div className="h-full  overflow-y-auto ">
                                    {props.tomorrow.length > 0 ? (
                                        props.tomorrow.map((index) => {
                                            // console.log(index);
                                            return (
                                                <>
                                                    <div className="flex justify-between items-center p-4 ">
                                                        <div className="flex gap-6">
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
                                                            <div>
                                                                <h1
                                                                    className={`font-bold text-xl mb-2 ${
                                                                        index.status ==
                                                                        `finished`
                                                                            ? "line-through"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    {
                                                                        index.title
                                                                    }
                                                                </h1>
                                                                <div className="flex gap-2">
                                                                    <div className="flex items-center gap-2 text-sm font-semibold mr-4">
                                                                        <FaCalendarAlt />
                                                                        {
                                                                            index.date
                                                                        }
                                                                    </div>

                                                                    <div className="flex items-center gap-2 text-sm font-semibold mr-4">
                                                                        <div className="h-4 w-4 bg-yellow-200 rounded"></div>
                                                                        {
                                                                            index
                                                                                .list
                                                                                .name
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() =>
                                                                openEdit(
                                                                    index.id,
                                                                    index.title,
                                                                    index.description,
                                                                    index.list
                                                                        .id,
                                                                    index.date
                                                                )
                                                            }
                                                        >
                                                            <MdNavigateNext />
                                                        </button>
                                                    </div>
                                                    <hr />
                                                </>
                                            );
                                        })
                                    ) : (
                                        <div className="w-full h-full flex flex-col">
                                            <div className="flex grow justify-center items-center p-4">
                                                <div className="text-center text-7xl text-[#2C3333]/75 font-bold">
                                                    <BsInfoSquareFill className="mx-auto mb-8" />
                                                    No Task Today!
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 w-full bg-white rounded-lg shadow-md ">
                            <div className="text-4xl font-bold flex gap-4 mb-8 max-h-[20%] ">
                                <h1 className="">This Week</h1>
                                <div className="px-2 rounded text-center bg-gray-300">
                                    {props.week.length}
                                </div>
                            </div>
                            <div className="max-h-[80%] h-full ">
                                <div className="h-full  overflow-y-auto ">
                                    {props.week.length > 0 ? (
                                        props.week.map((index) => {
                                            // console.log(index);
                                            return (
                                                <>
                                                    <div className="flex justify-between items-center p-4 ">
                                                        <div className="flex gap-6">
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
                                                            <div>
                                                                <h1
                                                                    className={`font-bold text-xl mb-2 ${
                                                                        index.status ==
                                                                        `finished`
                                                                            ? "line-through"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    {
                                                                        index.title
                                                                    }
                                                                </h1>
                                                                <div className="flex gap-2">
                                                                    <div className="flex items-center gap-2 text-sm font-semibold mr-4">
                                                                        <FaCalendarAlt />
                                                                        {
                                                                            index.date
                                                                        }
                                                                    </div>

                                                                    <div className="flex items-center gap-2 text-sm font-semibold mr-4">
                                                                        <div className="h-4 w-4 bg-yellow-200 rounded"></div>
                                                                        {
                                                                            index
                                                                                .list
                                                                                .name
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() =>
                                                                openEdit(
                                                                    index.id,
                                                                    index.title,
                                                                    index.description,
                                                                    index.list
                                                                        .id,
                                                                    index.date
                                                                )
                                                            }
                                                        >
                                                            <MdNavigateNext />
                                                        </button>
                                                    </div>
                                                    <hr />
                                                </>
                                            );
                                        })
                                    ) : (
                                        <div className="w-full h-full flex flex-col">
                                            <div className="flex grow justify-center items-center p-4">
                                                <div className="text-center text-7xl text-[#2C3333]/75 font-bold">
                                                    <BsInfoSquareFill className="mx-auto mb-8" />
                                                    No Task Today!
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
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
