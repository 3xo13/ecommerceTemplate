import { Category } from "@/db/category";
import { NextResponse } from "next/server";


const GET = async (request) => {
    try {
        const data = await Category.find({});
        
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({error})
    }
}

module.exports = {
    GET
}