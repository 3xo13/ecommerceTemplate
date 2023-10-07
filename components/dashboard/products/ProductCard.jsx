import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className=' w-36 h-fit rounded col items-center light-gray m-5 p-2 gap-1'>
        <img src={product.images[0]} alt={product.name} className='w-full h-auto rounded-t'/>
        <h3 className='capitalize'>{product.name}</h3>
    </div>
  )
}

export default ProductCard