'use client'
import {useState, useEffect, useCallback} from 'react'
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone';

const CreateProduct = ({setListProducts}) => {
    const [uploadedImages, setUploadedImages] = useState([]);
    console.log(uploadedImages[0]);
    const onDrop = (acceptedFiles) => {
        // Update state with the uploaded files
        setUploadedImages(prev => [...prev, ...acceptedFiles]);
    }

    const {getRootProps, getInputProps} = useDropzone(
        {onDrop, accept: 'image/*', multiple: true}
    );

    const handleImageDelete = (e, index) => {
        if(!uploadedImages?.length)return
        if(index === 0 && uploadedImages.length === 1) {
            setUploadedImages([])
            return
        }
        if(index === 0 && uploadedImages.length > 1){
            setUploadedImages(prev => prev.slice(1))
            return 
        }
        if(index === uploadedImages.length - 1){
            setUploadedImages(prev => prev.slice(0, prev.length - 1))
            return
        }
        setUploadedImages(prev => {
            const firstHalf = prev.slice(0, index)
            const secondHalf = prev.slice(index +1)
            return [...firstHalf, ...secondHalf]
        })
    }   

    const images = uploadedImages && uploadedImages.map((file, index) => {
        const url = file instanceof File
            ? URL.createObjectURL(file)
            : file;
        return (
            <div key={index} className="m-4 group">
                <div className='w-32 h-32 absolute bg-gray-100/50 hidden group-hover:flex flex-col items-center justify-center gap-2'>
                    <button className=' bg-yellow-500 hover:bg-yellow-400 text-white px-2 rounded capitalize'
                    onClick={e => handleImageDelete(e, index)}
                    >
                        view
                    </button>
                    <button className=' bg-red-600 hover:bg-red-500 text-white px-1 rounded capitalize'
                    onClick={e => handleImageDelete(e, index)}
                    >
                        delete
                    </button>
                </div>
                <img
                    src={url}
                    alt={`uploaded-${index}`}
                    className="max-w-xs max-h-xs w-32 h-32 object-contain"/>
            </div>
        ); 
    })

    return (
        <div className='w-full h-full row '>
            <div className='absolute w-screen h-screen top-0 left-0 hidden'>
                {/* create view image component here */}
            </div>
            <div className='w-6/12 h-full col items-center '>
                <div>
                    <div
                        {...getRootProps()}
                        className="border-2 border-dashed border-gray-400 p-8 mb-4 rounded-lg text-center cursor-pointer">
                        <input {...getInputProps()}/>
                        <p className="text-xl">Drag & drop images here, or click to select</p>
                    </div>

                    <div className="row flex-wrap justify-center overflow-y-auto">
                        {
                            images
                        }

                    </div>
                </div>
            </div>
            <div className="w-6/12 h-full col items-end ">
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

                    <button className='dash-btn border-2 mt-3'>create category</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct