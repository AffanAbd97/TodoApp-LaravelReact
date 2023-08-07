
import { router,  } from "@inertiajs/react";
import React from "react";

import {RiErrorWarningFill} from 'react-icons/ri'
export default function ConfirmDialog(props) {
   

    const closeDialog = () => {
 
      props.onDeleteChange(false);
    };


    const deleteTask=(e)=>{
      e.preventDefault();
    
 
  props.onChange(true);
  props.onDeleteChange(false);
  router.delete(route("delete.task",props.id));
 }
return(<>
<div className=" md:flex md:items-center md:justify-center bg-black/25 w-full h-full absolute z-10 inset-0">
  <div className="" />
  <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
    <div className="md:flex items-center">
      <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
        <i className="bx bx-error text-3xl" />
        <RiErrorWarningFill className="text-6xl text-red-700"/>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
        <p className="font-bold">Delete Task</p>
        <p className="text-sm text-gray-700 mt-1">
          Are you sure want to delete this task. This action
          cannot be undone.
        </p>
      </div>
    </div>
    <div className="text-center md:text-right mt-4 md:flex md:justify-end">
      <button className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2" onClick={deleteTask}>
        Delete Task
      </button>
      <button
        className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
    md:mt-0 md:order-1"
    onClick={closeDialog}
      >
        Cancel
      </button>
    </div>
  </div>
</div>
</>);


}