'use client'
import CreateCategory from "./CreateCategory"
import CategoryBar from "./CategoryBar"
import {useEffect, useState} from "react"
import {v4 as uuid4} from 'uuid'

const CategoryiesManagment = () => {
    const [categories, setCategories] = useState();
    const [currentOption, setcurrentOption] = useState('delete');
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

    const handleDelete = (e,id,link) => {
        const deleteRes = async () => {
            try {
                const res = await fetch('/api/category/delete',{
                    method: 'POST',
                    body: JSON.stringify({link, id})
                })
                
                setRefresh(prev => prev+1)
                console.log(res);
                return res
            } catch (error) {
               console.log(error); 
            }
        }
        deleteRes()
    }

    let catList = categories
        ?.length && categories
            ?.map(cat => {
                switch (currentOption) {
                    case 'get':
                        return <CategoryBar key={uuid4()} category={cat} del={false} update={false} handleDel={handleDelete}/>
                        break;
                    case 'delete':
                        return <CategoryBar key={uuid4()} category={cat} del={true} update={false} handleDel={handleDelete}/>
                        
                        break;

                    default:
                        break;
                }
            })
    return (
        <div className="w-full h-full flex-row-center">
            {/* categories opetions */}
            <div
                className="categories-options w-3/12 h-full light-gray col items-end gap-3 px-2 py-5 ">
                <button className="full-w-btn" onClick={e => setRefresh(prev => prev+1)}>
                    categories
                </button>
                <button className="full-w-btn">
                    add category
                </button>
                <button className="full-w-btn">
                    update category
                </button>
                <button className="full-w-btn">
                    delete category
                </button>

            </div>
            {/* categories cards */}
            <div className="w-9/12 h-full p-3 col  overflow-y-scroll">
                {catList}
                {currentOption == 'put' && <CreateCategory/>}
            </div>
        </div>
    )
}

export default CategoryiesManagment