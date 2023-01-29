import Sidebar from '@/Components/Sidebar';
import { Link, Head } from '@inertiajs/react';

export default function Template({ children,list,tag }) {
   
    return (
        <>
            <Head title="Todo-List" />
            <div className="relative h-screen bg-gray-100  p-8">
            <div className='flex gap-4 h-full'>

            <Sidebar listprops={list} tagprops={tag}/>
            <main className='grow'>{children}</main>
            </div>
              
            </div>
        </>
    );
}
