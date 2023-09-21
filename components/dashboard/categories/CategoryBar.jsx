import React from 'react'

const CategoryBar = () => {
    return (
        <div
            className="w-full min-h-[70px] h-fit rounded-lg light-gray p-1 row justify-between items-center">
            <div className="col w-1/4 items-start p-2">
                <p>created :</p>
                <p>12/9/2023</p>
            </div>
            <div className="flex flex-row items-end justify-end p-2 gap-3 w-3/4">
                <button className="dash-btn">sub-Categories</button>
                <button className="dash-btn">products</button>
                <img
                    src="/assets/dev_assets/imgs/t-black.jpg"
                    alt="category image"
                    className="w-16 h-16 rounded-lg cursor-pointer"/>
            </div>
        </div>
    )
}

export default CategoryBar