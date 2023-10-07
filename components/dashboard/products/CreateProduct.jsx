'use client'
import {useState, useEffect} from 'react'
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone';

const CreateProduct = ({setListProducts}) => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [currentImage, setCurrentImage] = useState('');

    // form state
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [sub, setSub] = useState([]);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [tags, setTags] = useState([]);
    const [options, setOptions] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData();
            data.set('name', name)
            data.set('category', category)
            data.set('sub', sub)
            data.set('description', description)
            data.set('price', price)
            data.set('stock', stock)
            data.set('tags', tags)
            data.set('options', options)

            uploadedImages.forEach((file, index) => {
                data.append(`images[${index}]`, file); // Use an array of images
              });

            const res = await fetch('/api/products/put', {
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
    const onDrop = (acceptedFiles) => {
        // Update state with the uploaded files
        setUploadedImages(prev => [
            ...prev,
            ...acceptedFiles
        ]);
    }

    const {getRootProps, getInputProps} = useDropzone(
        {onDrop, accept: 'image/*', multiple: true}
    );

    const handleImageDelete = (e, index) => {
        if (
            !uploadedImages
                ?.length
        ) 
            return
        if (index === 0 && uploadedImages.length === 1) {
            setUploadedImages([])
            return
        }
        if (index === 0 && uploadedImages.length > 1) {
            setUploadedImages(prev => prev.slice(1))
            return
        }
        if (index === uploadedImages.length - 1) {
            setUploadedImages(prev => prev.slice(0, prev.length - 1))
            return
        }
        setUploadedImages(prev => {
            const firstHalf = prev.slice(0, index)
            const secondHalf = prev.slice(index + 1)
            return [
                ...firstHalf,
                ...secondHalf
            ]
        })
    }

    const images = uploadedImages && uploadedImages.map((file, index) => {
        const url = file instanceof File
            ? URL.createObjectURL(file)
            : file;
        return (
            <div key={index} className="m-4 group">
                <img
                    src={url}
                    alt={`uploaded-${index}`}
                    className="max-w-xs max-h-xs w-32 h-32 object-contain"/>
                <div className='w-32 h-14 flex flex-row items-center justify-center gap-2'>
                    <button
                        className=' bg-yellow-500 hover:bg-yellow-400 text-white px-2 rounded capitalize'
                        onClick={e => setCurrentImage(url)}>
                        view
                    </button>
                    <button
                        className=' bg-red-600 hover:bg-red-500 text-white px-1 rounded capitalize'
                        onClick={e => handleImageDelete(e, index)}>
                        delete
                    </button>
                </div>
            </div>
        );
    })

    return (
        <div className='w-full h-full row overflow-y-auto'>
            {/* view image component */}
            <div
                className={`absolute w-screen h-screen top-0 left-0 bg-gray-500/50 ${currentImage
                    ? ''
                    : 'hidden'} overflow-y-auto `}>
                <div className='w-full h-20 flex items-center justify-end pr-14 text-2xl'>
                    <button
                        onClick={e => setCurrentImage('')}
                        className='bg-red-600 hover:bg-red-500 text-white px-1 rounded capitalize'>close</button>
                </div>
                
                <div className='w-full h-full flex-center overflow-y-auto p-5'>
                    {
                        currentImage && <img
                                src={currentImage}
                                alt='product image'
                                className='w-[80%] h-[80%] object-contain'/>
                    }
                </div>
            </div>
            {/* dropzone component */}
            <div className='w-6/12 h-full col items-center  p-5'>
                <div>
                    <div
                        {...getRootProps()}
                        className="border-2 border-dashed border-gray-400 p-8 mb-4 rounded-lg text-center cursor-pointer">
                        <input {...getInputProps()}/>
                        <p className="text-xl">Drag & drop images here, or click to select</p>
                    </div>

                    <div className="row flex-wrap justify-center overflow-y-auto">
                        {images}

                    </div>
                </div>
            </div>
            {/* create product form */}
            <div className="w-6/12 h-full col items-end overflow-y-auto p-5">
                <form
                    className="w-full h-full col items-end gap-3"
                    action="/api/products/put"
                    encType="multipart/form-data"
                    onSubmit={e => handleSubmit(e)}>
                    <label htmlFor="ProductName" className="capitalize required">name</label>
                    <input
                        type="text"
                        name='name'
                        id="ProductName"
                        required
                        onChange={e => setName(e.target.value)}
                        className="border-2 w-2/3 focus:outline-0 px-1"/>

                    <label htmlFor="ProductCategory" className="capitalize required">category</label>
                    <input
                        type="text"
                        name='category'
                        id="ProductCategory"
                        required
                        onChange={e => setCategory(e.target.value)}
                        className="border-2 w-2/3 focus:outline-0 text-end px-1"
                        placeholder=""/>

                    <label htmlFor="ProductSub" className="capitalize">sub category</label>
                    <input
                        type="text"
                        name='subCategory'
                        id="ProductSub"
                        onChange={e => setSub(e.target.value)}
                        className="border-2 w-2/3 focus:outline-0 text-end px-1"
                        placeholder="add subs as collection of words"/>

                    <label htmlFor="productPrice" className="capitalize">description</label>
                    <textarea
                        name='price'
                        id="productPrice"
                        onChange={e => setDescription(e.target.value)}
                        className="border-2 w-2/3 h-fit focus:outline-0  px-1"/>

                    <label htmlFor="productPrice" className="capitalize required">price</label>
                    <input
                        type="number"
                        name='price'
                        id="productPrice"
                        required
                        onChange={e => setPrice(e.target.value)}
                        className="border-2 w-2/3 focus:outline-0  px-1"/>

                    <label htmlFor="productStock" className="capitalize" defaultValue={0} placeholder={0}>in Stock</label>
                    <input
                        type="number"
                        name='stock'
                        id="productStock"
                        onChange={e => setStock(e.target.value)}
                        className="border-2 w-2/3 focus:outline-0  px-1"/>

                    <label htmlFor="ProductTags" className="capitalize ">tags</label>
                    <input
                        type="text"
                        name='tags'
                        id="ProductTags"
                        onChange={e => setTags(e.target.value)}
                        className="border-2 w-2/3 focus:outline-0 text-end px-1"
                        placeholder="add tags as collection of words"/>

                    <label htmlFor="ProductTags" className="capitalize ">options</label>
                    <input
                        type="text"
                        name='options'
                        id="Productoptions"
                        onChange={e => setOptions(e.target.value)}
                        className="border-2 w-2/3 focus:outline-0 text-end px-1"
                        placeholder="add options as collection of words"/>

                    <button className='dash-btn border-2 mt-3'>create product</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct