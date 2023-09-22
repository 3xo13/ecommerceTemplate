'use client'
import React from 'react'

const CategoryBar = ({category, del, update, handleDel}) => {
    const name = category.category;
    const subs = category.subCategories;
    const date = new Date(
        category
            ?.created
    ).toLocaleDateString();
    const image = category.image;
    return (
        <div
            className="w-full min-h-[70px] h-fit rounded-lg light-gray p-1 row justify-between items-center mb-5">
            {/* info column */}
            <div className="w-3/12 h-full col items-start justify-center p-2">
                {del ? <button className='bg-red-500 hover:bg-red-600 p-2 rounded capitalize text-white '
                    onClick={e => handleDel(e,category._id, category.image)}
                >
                    delete
                </button> :
                <div>
                    <p>created :</p>
                    <p>{date || '12/9/2023'}</p> 
                </div>}
                
            </div>
            {/* buttons column */}
            <div className='w-5/12 h-full row items-end justify-end gap-2 '>
                {
                    subs
                        ?.length && subs[0] 
                            ? <button className="dash-btn">sub-Categories</button>
                            : ''
                }
                <button className="dash-btn">products</button>
            </div>
            {/* image/name column */}
            <div className="w-4/12 h-full min-h-20 flex flex-row items-end justify-end  gap-3 ">
                <h3 className='text-end'>{name}</h3>
                <img
                    src={image}
                    alt="category image"
                    className="w-16 h-16 rounded-lg cursor-pointer "/>

            </div>
        </div>
    )
}

export default CategoryBar