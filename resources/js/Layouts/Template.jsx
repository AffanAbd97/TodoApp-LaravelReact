import Sidebar from '@/Components/Sidebar';
import { Link, Head } from '@inertiajs/react';

export default function Template({ children,props }) {
    // console.log(props);
    return (
        <>
            <Head title="Todo-List" />
            <div className="relative h-screen bg-gray-100  p-8">
            <div className='flex gap-4 h-full'>

            <Sidebar props={props}/>
            <main className='grow'>{children}</main>
            </div>
              
            </div>
        </>
    );
}
