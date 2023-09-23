import { v4 as uuid4 } from 'uuid'
import Link from 'next/link'

const SidebarList = ({header,icon,list}) => {
    const listItems = list.map(item => <Link key={uuid4()} href={item.link}><li className='dash-li'>{item.title}</li></Link> ) 
    return (
        <div className='mb-5 capitalize'>
            <div className='flex flex-row items-center justify-end pr-5 '>
                <h2 className='font-bold'>{header}</h2>
                <img
                    src={icon || "/assets/icons/general/paw.svg"}
                    alt="product icon"
                    className='w-5 h-5 ml-1'/>
            </div>
            <ul className='flex flex-col justify-end '>
                {listItems}
            </ul>

        </div>
    )
}

export default SidebarList