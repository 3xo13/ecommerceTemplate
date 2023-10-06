'use client'
import {useEffect, useState} from "react"
import {v4 as uuid4} from 'uuid'
import CreateCategory from "./CreateCategory"
import DashCategoryCard from "./DashCategoryCard"
import EditCategory from "./EditCategory"

const CategoryiesManagment = () => {
    const [categories, setCategories] = useState();
    // currentoption is true display categories else add a new
    const [currentOption, setcurrentOption] = useState(true);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        const dataFethcher = async () => {
            try {
                const data = await fetch('/api/category', {method: 'GET'})
                    .then(
                        data => data.json()
                    )
                    .then(data => setCategories(data))

            } catch (error) {
                console.log(error);
            }
        }
        dataFethcher()
    }, [refresh])

    const handleDelete = (e, id, link) => {
        const deleteRes = async () => {
            try {
                const res = await fetch('/api/category/delete', {
                    method: 'POST',
                    body: JSON.stringify({link, id})
                })

                setRefresh(prev => prev + 1)
                return res
            } catch (error) {
                console.log(error);
            }
        }
        deleteRes()
    }

    let catList = categories
        ?.length && categories
            ?.map(
                cat => <DashCategoryCard
                    key={uuid4()}
                    category={cat}
                    del={false}
                    update={false}
                    handleDel={handleDelete}/>
            )

    return (
        <div className="w-full h-full flex-col-center">
            <div className="w-full h-20 row justify-end items-center gap-5 pr-10 ">
                <button className="dash-btn border-2 ">list</button>
                <button
                    className="dash-btn border-2 "
                    onClick={e => setcurrentOption(!currentOption)}>add</button>
            </div>
            <div
                className="w-full h-full px-10 py-5  row flex-wrap gap-5 justify-end overflow-y-auto">
                {currentOption && catList}
                {!currentOption && <CreateCategory setCurrentOption={setcurrentOption}/>}
            </div>
        </div>
    )
}

export default CategoryiesManagment
