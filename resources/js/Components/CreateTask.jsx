import { useEffect, useRef, useState } from "react";
import { router, Head } from "@inertiajs/react";
export default function CreateTask(props) {

    const menu = useRef();
    const [values, setValues] = useState({
        id: "",
        title: "",
        description: "",
        tags: 0,
        list: "",
        date: "",
    });
    const [isClosed, setClosed] = useState(props.closed);

    useEffect(() => {
        setClosed(props.closed);
    }, [props.closed]);
    useEffect(() => {
        setValues(props.values);
    }, [props.values]);

    useEffect(() => {
        if (isClosed) {
            menu.current.classList.add("toggled");
            menu.current.classList.remove("basis-1/3");
        } else {
            menu.current.classList.remove("toggled");
            menu.current.classList.add("basis-1/3");
        }
    }, [isClosed]);

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const handleClose = () => {
        props.onChange(true);
    };
    const submit = (e) => {
        e.preventDefault();
        props.onChange(true);
        router.post(route("save.task"), values);
        setValues({
            id: "",
            title: "",
            description: "",
            tags: 0,
            list: "",
            date: "",
        });
    };
    const selectChange = (event) => {
        setValues((values) => ({
            ...values,
            list: event.target.value,
        }));
    };
    const tagChange = (param) => {
        if (values.tags != param) {
            setValues((values) => ({
                ...values,
                tags: param,
            }));
        } else if (values.tags == param) {
            setValues((values) => ({
                ...values,
                tags: null,
            }));
        }
    };

    return (
        <div
            ref={menu}
            className="p-6 w-full h-full rounded bg-white toggled md:relative absolute shadow-lg ease-linear duration-200 ml-4"
        >
            <div className="text-4xl text-[#2C3333] font-bold flex justify-between gap-4 mb-8">
                <h1>Task</h1>
                <div
                    className="px-2 rounded text-center cursor-pointer border border-white hover:border-[#2C3333] hover:bg-gray-100"
                    onClick={handleClose}
                >
                    X
                </div>
            </div>
            <form className="" onSubmit={submit}>
                <div className="mb-4">
                    <input
                        className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight border border-gray-200 focus:ring-[#1B98E0] focus:border-[#1B98E0]"
                        id="title"
                        type="text"
                        placeholder="title"
                        defaultValue={values.title}
                        value={values.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        id="description"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 resize-none  rounded-lg border border-gray-200 focus:ring-[#1B98E0] focus:border-[#1B98E0]"
                        placeholder="Write your thoughts here..."
                        defaultValue={values.description}
                        value={values.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <table className="w-full">
                        <tr>
                            <td className="py-4">
                                {" "}
                                <label htmlFor="" className="font-bold">
                                    List
                                </label>
                            </td>
                            <td className="px-8">
                                {" "}
                                <select
                                    name=""
                                    id=""
                                    className="rounded w-full border border-gray-200 focus:ring-[#1B98E0] focus:border-[#1B98E0]"
                                    onChange={selectChange}
                                    value={values.list}
                                >
                                    <option value="0">Select</option>
                                    {props.list.map((index, key) => {
                                        return (
                                            <option value={index.id}>
                                                {index.name}
                                            </option>
                                        );
                                    })}
                                    ;
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4">
                                {" "}
                                <label htmlFor="" className="font-bold">
                                    Due Date
                                </label>
                            </td>
                            <td className="px-8">
                                <input
                                    type="date"
                                    name=""
                                    id="date"
                                    className="rounded w-full border border-gray-200 focus:ring-[#1B98E0] focus:border-[#1B98E0]"
                                    defaultValue={values.date}
                                    value={values.date}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                     
                    </table>
                </div>

                <div className="flex w-full justify-between items-center gap-2">
                
                    <button
                        type="submit"
                        className="w-full bg-[#1B98E0]  hover:bg-[#1768AC] shadow-md hover:shadow-none -translate-y-1 hover:translate-y-0 active:translate-y-1 active:bg-[#007EA7]  font-bold text-white p-4 rounded"
                    >
                        Save Change
                    </button>
                </div>
            </form>
        </div>
    );
}
