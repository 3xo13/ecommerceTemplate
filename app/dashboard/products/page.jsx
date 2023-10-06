'use client'
import {useState, useEffect} from 'react'
import CreateProduct from '@/components/dashboard/products/CreateProduct';


const dashboardProductsPage = () => {
    const [listProducts, setListProducts] = useState(false);


  return (
    <div className='w-full h-full col'>
        <div className='w-full h-20 row items-center justify-end gap-5 pr-10 shadow'>
            <button className='dash-btn border-2 shadow' onClick={e => setListProducts(!listProducts)}>add</button>
            <button className='dash-btn border-2 shadow'>list</button>
        </div> 
        <div className='w-full h-full overflow-y-auto p-5'>
            {!listProducts && <CreateProduct setListProducts={setListProducts}/>}
        </div> 
    </div>
  )
}

export default dashboardProductsPage