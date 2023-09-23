import { Category } from "@/db/category";
import { NextResponse } from "next/server";


const POST = async (request) => {

    try {
        const searchParams = await request.json()
        const data = await Category.find({});
        
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({error})
    }
}

module.exports = {
    POST
}