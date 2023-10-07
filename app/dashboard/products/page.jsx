'use client'
import {useState, useEffect} from 'react'
import CreateProduct from '@/components/dashboard/products/CreateProduct';
import DashboardProducts from '@/components/dashboard/products/DashboardProducts';

const dashboardProductsPage = () => {
    const [listProducts, setListProducts] = useState(true);


  return (
    <div className='w-full h-full col'>
        <div className='w-full h-20 row items-center justify-end gap-5 pr-10 shadow'>
            <button className='dash-btn border-2 shadow' onClick={e => setListProducts(!listProducts)}>add</button>
            <button className='dash-btn border-2 shadow'>list</button>
        </div> 
        <div className='w-full h-full overflow-y-auto pb-10'>
            {!listProducts && <CreateProduct setListProducts={setListProducts}/>}
            {listProducts && <DashboardProducts />}
        </div> 
    </div>
  )
}

export default dashboardProductsPage