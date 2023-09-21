'use client'
import {useState, useEffect} from 'react'

const CreateCategory = () => {
    const handleSubmit = () => {

    }
    return (
        <div className="w-full h-full col items-end ">
            <form className="w-full h-full col items-end gap-3" >
                <label htmlFor="category_name" className="capitalize">name</label>
                <input
                    type="text"
                    id="category_name"
                    className="border-2 w-2/3 focus:outline-0"/>

                <label htmlFor="category_image" className="capitalize">image</label>
                <input
                    type="file"
                    id="category_image"
                    className="border-2 w-2/3 focus:outline-0 "/>

                <label htmlFor="category_subs" className="capitalize">sub categories</label>
                <input
                    type="text"
                    id="category_subs"
                    className="border-2 w-2/3 focus:outline-0 text-end"
                    placeholder="add subs as collection of words"/>

                <button className='dash-btn border-2 mt-3'>create category</button>
            </form>
        </div>
    )
}

export default CreateCategory