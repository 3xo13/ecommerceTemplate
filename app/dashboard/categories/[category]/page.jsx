'use client'
import {useEffect, useState} from 'react'
import Image from 'next/image';

const CategoryPage = ({params}) => {
    const [category, setCategory] = useState();
    const [file, setFile] = useState();
    const [name, setName] = useState();
    const [sub, setSub] = useState([]);
    const [toggleWarning, setToggleWarning] = useState(false);
    // let currentImage = category && category.image;
    const localDate = category && new Date(category.created).toLocaleDateString()
    // console.log('category',category);
    useEffect(() => {
        const handleFetch = async () => {
            await fetch('/api/category/get', {
                method: 'POST',
                body: JSON.stringify({id: params.category})
            })
                .then(data => data.json())
                .then(data => setCategory(data))
        }
        handleFetch()
    }, [])

    const handleEdit = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData();
            data.set('file', file)
            data.set('name', name)
            data.set('sub', sub)
            data.set('id', category._id)

            const res = await fetch('/api/category/update', {
                method: "POST",
                body: data
            })
            if (!res.ok) {
                throw new Error('error while fteching')
            }
            const jsonData = await res.json()
            console.log(jsonData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full h-full overflow-y-auto row items-end justify-end'>
            <div className='h-full w-4/12 flex items-start justify-start '>
                <div className=' border-2 p-5 rounded-lg light-gray m-5'>

                    {category && <img src={category.image} alt="category" className='w-60 h-60 rounded'/>}

                </div>
            </div>
            <div className='h-full w-8/12 col items-end p-5'>
                {
                    category && <div className='w-full p-3 row justify-between'>
                            <div className='row'>
                                <p>created:&nbsp;</p>
                                <p>{localDate}</p>
                            </div>
                            <h1 className='text-2xl capitalize '>{category.category}</h1>
                        </div>
                }
                {
                    category && <div className='w-full h-full p-5 light-gray rounded-lg col items-end'>

                            <form
                                action="/api/category/update"
                                className='col items-end w-full'
                                onSubmit={e => handleEdit(e)}>

                                <label htmlFor="title" className='mb-3 capitalize text-lg'>title</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    defaultValue={category.category}
                                    onChange={e => setName(e.target.value)}
                                    className='text-end p-1 px-3 w-11/12 rounded'/>

                                <label htmlFor="subCategories" className='mb-3 mt-5 capitalize text-lg'>sub-Categories</label>
                                <input
                                    type="text"
                                    name="subCategories"
                                    id="subCategories"
                                    defaultValue={category
                                        .subCategories
                                        .join(' ')}
                                    onChange={e => setSub(e.target.value)}
                                    className='text-end p-1 px-3 w-11/12 rounded'/>

                                <label htmlFor="image" className='mb-3 mt-5 capitalize text-lg'>image</label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    onChange={e => setFile(
                                        e.target.files
                                            ?.[0]
                                    )}
                                    className='text-end p-1 px-3 w-11/12 rounded bg-white'/>

                                <button
                                    className='text-lg capitalize w-11/12 h-8
                                bg-yellow-500 hover:bg-yellow-400 text-white mt-5
                                mt-0 rounded self-end'>
                                    edit</button>

                            </form>
                            <button
                                className='text-lg capitalize w-11/12 h-8
                                bg-red-500 hover:bg-red-400 text-white mt-5
                                mt-0 rounded '
                                onClick={e => setToggleWarning(true)}>
                                delete</button>
                            {
                                toggleWarning && <div
                                        className='w-screen h-screen bg-black/70 absolute top-0 left-0 z-10 flex-center'>
                                        <div>
                                            <p className='text-white text-lg w-[40vw] text-center'>
                                                <span className='text-red-500 text-2xl capitalize'>warning:&nbsp;
                                                </span>
                                                deleting a Category will result of deleting all sub-categories and products that
                                                belong to it</p>
                                                <button
                                                className='text-lg capitalize w-[19vw] h-8
                                bg-white hover:bg-gray-200  mt-5 mr-[2vw]
                                mt-0 rounded '
                                onClick={e => setToggleWarning(false)}>
                                                cancel</button>
                                            <button
                                                className='text-lg capitalize w-[19vw] h-8
                                bg-red-500 hover:bg-red-400 text-white mt-5
                                mt-0 rounded '
                                onClick={e => setToggleWarning(false)}>
                                                delete</button>
                                        </div>
                                    </div>
                            }
                        </div>
                }
            </div>

        </div>
    )
}

export default CategoryPage