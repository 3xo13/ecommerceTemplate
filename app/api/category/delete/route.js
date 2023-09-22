import s3Client from "@/db/s3Client";
import {DeleteObjectCommand} from "@aws-sdk/client-s3";
import { NextResponse } from 'next/server';
import { Category } from "@/db/category";
import dotenv from 'dotenv';
dotenv.config();

const Bucket = process.env.S3_BUCKET;

const POST = async (request) => {
    try {
        const req = await request.json();
        console.log("🚀 ~ file: route.js:12 ~ POST ~ req:", req)
        const id = req.id;
        const s3ObjectUrl = req.link;
        let Key;
        if(s3ObjectUrl){
            const urlParts = s3ObjectUrl.split('/');
            Key = urlParts.slice(3).join('/');
            const params = {
                Bucket,
                Key: Key,
            };
            const deleteObjectCommand = new DeleteObjectCommand(params);
            await s3Client.send(deleteObjectCommand);

        }

        await Category.deleteOne({_id: id})
        return NextResponse.json({sucess: `image with key:${Key} id:${id} was deleted`})
    } catch (error) {
        console.log(error);
        return NextResponse.json({fail: 'something went wrong', error})
    }
}

module.exports = {
    POST
}
