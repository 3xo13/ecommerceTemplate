import SidebarList from "@/components/dashboard/lists/SidebarList";
import {headers} from "@/next.config";
import {v4 as uuid4} from 'uuid';

import CategoryiesManagment from "@/components/dashboard/categories/CategoryiesManagment";

const page = () => {
    // console.log(new Date().toLocaleString());


    return (
        <div
            className='dashboard-wrapper w-full h-full min-w-full min-h-full overflow-hidden row '>
                dashboard main page
        </div>
    )
}

export default page