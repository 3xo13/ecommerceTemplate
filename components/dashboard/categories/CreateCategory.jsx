'use client'
import {useState, useEffect} from 'react'

const CreateCategory = ({setCurrentOption}) => {
    const [file, setFile] = useState();
    const [name, setName] = useState();
    const [sub, setSub] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData();
            data.set('file', file)
            data.set('name', name)
            data.set('sub', sub)

            const res = await fetch('/api/category/create', {
                method: "POST",
                body: data
            })
            if (!res.ok) {
                throw new Error('error while fteching')
            }
            const jsonData = await res.json()
            setCurrentOption('get')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full h-full col items-end ">
            <form
                className="w-full h-full col items-end gap-3"
                action="/api/category/create"
                encType="multipart/form-data"
                onSubmit={e => handleSubmit(e)}>
                <label htmlFor="category_name" className="capitalize">name</label>
                <input
                    type="text"
                    name='name'
                    id="category_name"
                    onChange={e => setName(e.target.value)}
                    className="border-2 w-2/3 focus:outline-0"/>

                <label htmlFor="category_image" className="capitalize">image</label>
                <input
                    type="file"
                    name='file'
                    id="category_image"
                    onChange={e => setFile(
                        e.target.files
                            ?.[0]
                    )}
                    className="border-2 w-2/3 focus:outline-0 "/>

                <label htmlFor="category_subs" className="capitalize">sub categories</label>
                <input
                    type="text"
                    name='sub'
                    id="category_subs"
                    onChange={e => setSub(e.target.value)}
                    className="border-2 w-2/3 focus:outline-0 text-end"
                    placeholder="add subs as collection of words"/>

                <button className='dash-btn border-2 mt-3' >create category</button>
            </form>
        </div>
    )
}

export default CreateCategory