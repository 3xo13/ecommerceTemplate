'use client'
import { useEffect, useState } from "react"


const UploadProfileImg = () => {
    const [file, setFile] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(e.target[0].value);
        try {
            const data = new FormData();
            data.set('file', file)

            const res = await fetch('/api/upload',{
                method: "POST",
                body: data
            })
            // .then(data => data.json()).then(data => console.log(data.fileUrl))
            if(!res.ok){
                throw new Error('error while fteching')
            }
            const jsonData = await res.json()
            const url = jsonData.fileUrl;
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h2>File Upload With
                <code>"Node.js"</code>
            </h2>
            <form action="/api/upload" encType="multipart/form-data" onSubmit={e => handleSubmit(e)}>
                <div>Select a file:
                    <input name="file" type="file"
                    onChange={e => setFile(e.target.files?.[0])}
                    />
                </div>
                <button >submmit</button>
            </form>
        </div>
    )
}

export default UploadProfileImg