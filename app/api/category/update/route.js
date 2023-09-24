import { Category } from '@/db/category';
import imageUploader from '@/functions/imageUpload';
import { NextResponse } from 'next/server';
import {DeleteObjectCommand} from "@aws-sdk/client-s3";
import s3Client from '@/db/s3Client';
import dotenv from 'dotenv';
dotenv.config();

const Bucket = process.env.S3_BUCKET;

export async function POST(request) {
  const data = await request.formData();
  const file = data.get('file');
  console.log("🚀 ~ file: route.js:8 ~ POST ~ file:",typeof file)
  try {
    // const request = await requestuest.json();
    const name = data?.get('name');
    const subCategories = data?.get('sub');
    const id = data?.get('id')
    
    let oldCategory = await Category.findOne({_id: id})
    
    if(!oldCategory){
        throw new Error('category was not found')
    }


    const urlParts = oldCategory.image.split('/');
    const Key = urlParts.slice(3).join('/');
    const params = {
        Bucket,
        Key: Key,
    };

    let image;
    if(file !== 'undefined'){
        const deleteObjectCommand = new DeleteObjectCommand(params);
        await s3Client.send(deleteObjectCommand);
        const result = await imageUploader(file)
        image = result?.fileUrl
    }

    if(name !== 'undefined' )oldCategory.category = name;
    if(file !== 'undefined' && image)oldCategory.image = image;
    if(subCategories !== 'undefined' )oldCategory.subCategories = subCategories.split(' ')

    await oldCategory.save()

    return NextResponse.json({ success: `category ${name} was updated` })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message })
  }
}