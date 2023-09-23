'use client'
import Link from "next/link";

const DashCategoryCard = ({category, del, update, handleDel, handelUpdate}) => {
    const name = category.category;
    const subs = category.subCategories;
    const date = new Date(
        category
            ?.created
    ).toLocaleDateString();
    const image = category.image;
    const id = encodeURIComponent(category._id)
    return (
        <div
            className="w-48 h-fit rounded-lg dark-gray hover:bg-gray-100 p-1 col justify-center items-center cursor-pointer">
            <Link href={`/dashboard/categories/${id}`}>
                <img src={image} alt="category image" className="w-40 h-40 rounded-lg m-2"/>
                <h3 className='text-end m-3 capitalize'>{name}</h3>

            </Link>
        </div>
    )
}

export default DashCategoryCard