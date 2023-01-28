import Template from "@/Layouts/Template";
import { Head } from "@inertiajs/react";
import { useRef, useState } from "react";
import { FaPlus, FaCalendarAlt } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

export default function Today(props) {
    console.log(props);
    const [values, setValues] = useState({
        title: "",
        description: "",
   
            tags:"",
            list:"",
            date:"",
        
        
      })
      
      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }
    const submit = (e) => {
        e.preventDefault();

        router.post(route('save'), values);
    };
    const menu = useRef();
    const btnRef = useRef();

    const showNavbar = (valTitle,valDescription,valTags,valList,valDate) => {
        console.log(valTitle);
        if (valTitle === undefined) {
            valTitle = "";
        }
        if (valDescription === undefined) {
            valDescription = "";
        }
        if (valTags === undefined) {
            valTags = "";
        }
        if (valList === undefined) {
            valList = "";
        }
        if (valDate === undefined) {
            valDate = "";
        }
       setValues(
     { 
        title:valTitle,
        description:valDescription,
        tags:valTags,
        list:valList,
        date:valDate}
       );
   
        menu.current.classList.toggle("toggled");
        //   btnRef.current.classList.toggle("btn-absolute");
    };
    console.log(values);
    return (
        <>
            <Template props={props.list}>
                <Head title="Todo-List" />
                <div className="flex h-full">
                    <div className="p-6 w-full ">
                        <div className="text-4xl font-bold flex gap-4 mb-8">
                            <h1>Today</h1>
                            <div className="px-2 rounded text-center bg-gray-300">
                                1
                            </div>
                        </div>
                        <div>
                            <div className="w-full">
                                <button className="w-full flex items-center border border-slate-500 p-4 gap-4 rounded " onClick={()=>showNavbar()}>
                                    <FaPlus />
                                    Add New Task
                                </button>
                            </div>
                            <div className="flex justify-between items-center p-4">
                                <div className="flex gap-6">
                                    <form action="">
                                        <input type="checkbox" name="" id="" />
                                    </form>
                                    <div>
                                        <h1 className="font-bold text-xl mb-2">
                                            Title
                                        </h1>
                                        <div className="flex gap-2">
                                            <div className="flex items-center gap-2 text-sm font-semibold mr-4">
                                                <FaCalendarAlt />
                                                22-08-2022
                                            </div>

                                            <div className="flex items-center gap-2 text-sm font-semibold mr-4">
                                                <div className="h-4 w-4 bg-yellow-200 rounded"></div>
                                                Personal
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={()=>showNavbar("ada",'adw','1','adwa','2020-12-13')}>
                                    <MdNavigateNext />
                                </button>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div ref={menu} className="p-6 w-full h-full rounded bg-slate-50 toggled">
                        <div className="text-4xl font-bold flex justify-between gap-4 mb-8">
                            <h1>Task :</h1>
                            <div
                                className="px-2 rounded text-center bg-gray-300"
                                onClick={()=>showNavbar()}
                            >
                                X
                            </div>
                        </div>
                        <form className="">
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    defaultValue={values.title}
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    id="message"
                                    rows={4}
                                    className=" resize-noneblock p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Write your thoughts here..."
                                   
                                    defaultValue={values.description}
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <table>
                                    <tr>
                                        <td className="py-4">
                                            {" "}
                                            <label
                                                htmlFor=""
                                                className="font-bold:"
                                            >
                                                List
                                            </label>
                                        </td>
                                        <td className="px-8">
                                            {" "}
                                            <select
                                                name=""
                                                id=""
                                                className="rounded"
                                            >
                                                <option value="1">
                                                    Personal
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4">
                                            {" "}
                                            <label
                                                htmlFor=""
                                                className="font-bold:"
                                            >
                                                Due Date
                                            </label>
                                        </td>
                                        <td className="px-8">
                                            <input
                                                type="date"
                                                name=""
                                                id=""
                                                className="rounded"
                                                defaultValue={values.date}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4">
                                            <label
                                                htmlFor=""
                                                className="font-bold:"
                                            >
                                                Tags
                                            </label>
                                        </td>
                                        <td className="px-8">
                                            <div className="flex gap-2">
                                                <div className="flex items-center text-md  font-bold bg-red-400 rounded py-0.5 px-2 ">
                                                    Tag 1
                                                </div>
                                                <div className="flex items-center text-md  font-bold bg-red-400 rounded py-0.5 px-2 ">
                                                    Tag 1
                                                </div>
                                            </div>
                                            <input
                                                type="hidden"
                                                name=""
                                                id="inputTag"
                                            />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                                <div className="flex w-full justify-between items-center gap-2">
                                    <button  className="w-1/2 bg-slate-500 p-4 rounded">Delete Task</button>
                                    <button className="w-1/2 bg-slate-500 p-4 rounded">Save Change</button>
                              
                            </div>
                        </form>
                    </div>
                </div>
            </Template>
        </>
    );
}
