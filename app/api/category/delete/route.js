import s3Client from "@/db/s3Client";
import {DeleteObjectCommand} from "@aws-sdk/client-s3";
import { NextResponse } from 'next/server';
import { Category } from "@/db/category";
import dotenv from 'dotenv';
dotenv.config();

const Bucket = process.env.S3_BUCKET;

const POST = async (request) => {
    const req = await request.json();
    const s3ObjectUrl = req.link;
    const id = req.id;
    try {
        const urlParts = s3ObjectUrl.split('/');
        const Key = urlParts.slice(3).join('/');
        const params = {
            Bucket,
            Key: Key,
        };
        const deleteObjectCommand = new DeleteObjectCommand(params);
        await s3Client.send(deleteObjectCommand);
        await Category.deleteOne({_id: id})
        return NextResponse.json({sucess: `image with key:${Key} id:${id} was deleted`})
    } catch (error) {
        return NextResponse.json({fail: 'something wen wrong'})
    }
}

module.exports = {
    POST
}
