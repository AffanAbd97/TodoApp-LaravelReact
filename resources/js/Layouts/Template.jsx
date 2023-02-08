import Sidebar from '@/Components/Sidebar';
import { Link, Head } from '@inertiajs/react';

export default function Template({ children,list,tag,today,tomorrow,week,all }) {
   
    return (
        <>
            <Head title="Todo-List" />
            <div className="relative h-screen bg-gray-100  ">
            <div className='flex gap-4 h-full max-h-screen'>

            <Sidebar listprops={list} tagprops={tag} today={today }  week={week} tomorrow={tomorrow} all={all}/>
            <main className='grow  h-full max-h-screen'>{children}</main>
            </div>
              
            </div>
        </>
    );
}
