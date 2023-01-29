import { router,Head } from "@inertiajs/react";
import { useRef, useState } from "react";
export default function Create ({list,tag})  {
    console.log(list);
    console.log(tag);
    const [values, setValues] = useState({
        id:"",
        title: "",
        description: "",
            tags:0,
            list:"",
            date:"",
        
        
      })
      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
            
        }));
    }
    const selectChange=(event)=>{
      setValues((values) => ({
          ...values,
          list: event.target.value,
      }));
    }
    const tagChange=(param)=>{
      setValues((values) => ({
          ...values,
          tags: param
      }));
    }
      
    const submit = (e) => {
        e.preventDefault();

        router.post(route("save.task"),values);
        setValues((values) => ({
            ...values,
            title: "",
            description: "",
                tags:0,
                list:"",
                date:"",
        }));
    };
    const submitEdit = (e) => {
        console.log(values.id);
        e.preventDefault();

        // router.put(route("save.task",id),values);
        // setValues((values) => ({
        //     ...values,
        //     title: "",
        //     description: "",
        //         tags:0,
        //         list:"",
        //         date:"",
        // }));
    };
    const menu = useRef();
  

    const showNavbar = (valId,valTitle,valDescription,valTags,valList,valDate) => {
        console.log(valTitle);
        if (valId === undefined) {
            valId = "";
        }
        if (valTitle === undefined) {
            valTitle = "";
        }
        if (valDescription === undefined) {
            valDescription = "";
        }
        if (valTags === undefined) {
            valTags = 0;
        }
        if (valList === undefined) {
            valList = "";
        }
        if (valDate === undefined) {
            valDate = "";
        }
       setValues(
     { 
        id:valId,
        title:valTitle,
        description:valDescription,
        tags:valTags,
        list:valList,
        date:valDate}
       );
   
        menu.current.classList.toggle("toggled");
        //   btnRef.current.classList.toggle("btn-absolute");
    };
  return(<>
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
                        <form className=""onSubmit={!values.id?submit:()=>submitEdit(values.id)}>
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="title"
                                    type="text"
                                    placeholder="title"
                                    defaultValue={values.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    id="description"
                                    rows={4}
                                    className=" resize-noneblock p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Write your thoughts here..."
                                   
                                    defaultValue={values.description}
                                    onChange={handleChange}
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
                                                onChange={selectChange}
                                            >
                                                <option value="0">
                                              Select
                                           </option>
                                                {list.map((index,key)=>{

                                               return( <option value={index.id}>
                                               {index.name}
                                           </option>);
                                                })};
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
                                                id="date"
                                                className="rounded"
                                                defaultValue={values.date}  onChange={handleChange}
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
                                               {tag.map((index,key)=>{
                                                return( <div className={`flex items-center text-md  font-bold ${index.color} rounded py-0.5 px-2 ${values.tags==index.id ? `border-2 border-black`:`` }`} onClick={()=>tagChange(index.id)}>
                                                {index.name}
                                            </div>);
                                               })}
                                                
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
                                    <button type="submit" className="w-1/2 bg-slate-500 p-4 rounded">Save Change</button>
                              
                            </div>
                        </form>
                    </div></>);
}