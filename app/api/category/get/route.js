import { Category } from "@/db/category";
import { NextResponse } from "next/server";


const POST = async (request) => {

    try {
        const searchParams = await request.json();
        
        if(!searchParams?.id){
            throw new Error('id is requierd');
        }
        const data = await Category.findOne({"_id": searchParams.id});
        
        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({error});
    }
}

module.exports = {
    POST
}