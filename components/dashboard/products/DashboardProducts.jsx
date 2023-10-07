'use client'
import {useState, useEffect} from 'react'
import ProductCard from '@/components/dashboard/products/ProductCard'

const DashboardProducts = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const dataFethcher = async () => {
            try {
                const data = await fetch('/api/products', {method: 'GET'})
                const jsonData = await data.json()
                setProducts(jsonData)
            } catch (error) {
                console.log(error);
            }
        }
        dataFethcher()
    }, [])

    const cards = products && products.map(product => <ProductCard product={product}/>)

  return (
    <div className='row justify-end flex-wrap'>
        {cards}
    </div>
  )
}

export default DashboardProducts