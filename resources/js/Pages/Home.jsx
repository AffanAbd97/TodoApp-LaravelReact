import Sidebar from '@/Components/Sidebar';
import { Link, Head } from '@inertiajs/react';

export default function Home(props) {
    return (
        <>
            <Head title="Todo-List" />
            <div className="relative h-screen bg-gray-100  p-8">
            <div className='flex gap-4 h-full'>

            <Sidebar/>
            <div className=''>
                <h1>Today</h1>
            </div>
            </div>
              
            </div>
        </>
    );
}
