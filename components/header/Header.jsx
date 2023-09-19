import Link from "next/link"

const Header = () => {
  return (
    <div className='headerContainer w-screen h-[90px] flex-center'>
        <div className='w-[80%] h-full  flex flex-row items-end justify-center border-b-2'>
            <div className='header-left-col w-1/2 h-full flex-center flex-row '>
                <div className='w-2/12 h-full flex items-center justify-start '>
                    <img src="/assets/icons/general/paw.svg" alt="logo" className='lg:w-10 lg:h-10 object-contain '/>
                </div>
                <div className='navContainer w-10/12 flex-center'>
                    <nav className="w-full h-full flex flex-row items-center justify-start gap-10 ">
                        <Link href='/'>
                            <p>Home</p>
                        </Link>
                        <Link href='/categories'>
                            <p>Categories</p>
                        </Link>
                        <Link href='/blog'>
                            <p>Blog</p>
                        </Link>
                        <Link href='/contact'>
                            <p>Contact</p>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-row items-center justify-end gap-5 ">
                <button className="cursor-pointer">
                    <img src="/assets/icons/general/search.svg" alt="" className="w-8 h-6 "/>
                </button>
                <Link href='/profile'>
                <button className="cursor-pointer">
                    <img src="/assets/icons/header/user.svg" alt="" className="w-8 h-6 "/>
                </button>
                </Link>
                <button className="cursor-pointer">
                    <img src="/assets/icons/header/shopping_cart.svg" alt="" className="w-8 h-6 "/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header