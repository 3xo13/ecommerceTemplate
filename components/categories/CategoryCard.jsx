import React from 'react'

const CategoryCard = ({categoryObj}) => {
    
  return (
    <div className='w-48 h-56 flex-col rounded-xl bg-slate-200/80'>
        <img src={categoryObj.image} alt="Category Image" className='w-full h-4/6 object-contain object-center p-1 rounded-t-xl'/>
        <h2 className='text-black w-full h-2/6 py-2 px-2 text-center mt-3 capitalize'>{categoryObj.category}</h2>
    </div>
  )
}

export default CategoryCard