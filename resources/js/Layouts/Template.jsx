import Sidebar from '@/Components/Sidebar';
import { Link, Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
export default function Template({ children,list,tag,today,tomorrow,week,all,flash,task }) {
    
    useEffect(() => {
        notify(flash);
    }, [flash]);
    const notify = (type) => {
    
  if (type.success != null) {
    
      toast.success(type.success , {
        position: toast.POSITION.BOTTOM_RIGHT
      });
  }
  if (type.error != null) {
    
    toast.error(type.error , {
      position: toast.POSITION.BOTTOM_RIGHT
    });
}

if (type.warning != null) {
    
    toast.warn(type.warning , {
      position: toast.POSITION.BOTTOM_RIGHT
    });
}
  if (type.info != null) {
    
    toast.info(type.info , {
      position: toast.POSITION.BOTTOM_RIGHT
    });
}
  
      };
  

    return (
        <>
            <Head title="Todo-List" />
            <ToastContainer/>
            <div className="relative h-screen bg-gray-100  ">
            <div className='flex gap-4 h-full max-h-screen'>

            <Sidebar listprops={list} tagprops={tag} today={today }  week={week} tomorrow={tomorrow} all={all} task= {task}/>
            <main className='grow  h-full max-h-screen p-4'>{children}</main>
            </div>
              
            </div>
        </>
    );
}
