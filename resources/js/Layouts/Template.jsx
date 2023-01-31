import Sidebar from '@/Components/Sidebar';
import { Link, Head } from '@inertiajs/react';

export default function Template({ children,list,tag }) {
   
    return (
        <>
            <Head title="Todo-List" />
            <div className="relative h-screen bg-gray-100  p-8">
            <div className='flex gap-4 h-full max-h-screen'>

            <Sidebar listprops={list} tagprops={tag}/>
            <main className='grow  h-full max-h-screen'>{children}</main>
            </div>
              
            </div>
        </>
    );
}
