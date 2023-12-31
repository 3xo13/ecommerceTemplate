import listData from "@/public/lists/dashboard";
import SidebarList from "@/components/dashboard/lists/SidebarList";
import { v4 as uuid4 } from 'uuid'

const layout = ({ children }) => {
    const lists = listData.map(
        item => <SidebarList
            key={uuid4()}
            header={item.header}
            icon={item.icon}
            list={item.list}/>
    )
  return (
    <div
    className='dashboard-wrapper w-screen h-screen min-w-screen min-h-screen overflow-hidden row dark-gray'>
    <div className='dashboard-content-container w-9/12 h-screen min-h-screen col '>
        {/* header */}
        <div className='dashboard-header-wrapper w-full h-32  pl-5'>
            <div
                className='dashboard-header w-full h-[60%] light-gray rounded-lg mt-5 flex flex-row items-center justify-end gap-5 pr-5'>
                <input
                    type="text"
                    name="search"
                    id="search-home"
                    className="w-72 h-8 rounded-xl bg-white/80 focus:outline-0 px-5  drop-shadow-lg"/>
                <img
                    src="/assets/icons/general/bell.svg"
                    alt="notification"
                    className='w-5 h-5'/>
                <img
                    src="/assets/images/general/maleAvatar.jpg"
                    alt="admin image"
                    className='w-12 h-12 rounded-full  '/>

            </div>
        </div>
        {/* content body */}
        <div className='dashboard-content rounded-tr-lg h-full h-full bg-white overflow-y-auto'>
            {children}

        </div>
    </div>
    {/* sidebar (dashboard navigation) */}
    <div className='sid-bar w-3/12 h-full min-h-screen  flex-center'>
        <div className='light-gray w-[90%] h-[94vh] min-h-[94vh] rounded-lg'>
            <div className='p-7 w-full h-1/6 flex items-end justify-end'>
                <h1 className='primary text-2xl text-end'>Dashboard</h1>
            </div>
            <div className='sidbar-content w-full h-5/6  '>
                {lists}
            </div>
        </div>

    </div>
</div>
  )
}

export default layout