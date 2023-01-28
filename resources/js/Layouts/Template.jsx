import Sidebar from '@/Components/Sidebar';
import { Link, Head } from '@inertiajs/react';

export default function Template({ children }) {
    return (
        <>
            <Head title="Todo-List" />
            <div className="relative h-screen bg-gray-100  p-8">
            <div className='flex gap-4 h-full'>

            <Sidebar/>
            <main className='grow'>{children}</main>
            </div>
              
            </div>
        </>
    );
}
