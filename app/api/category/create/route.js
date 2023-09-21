import { Category } from '@/db/category';
import imageUploader from '@/functions/imageUpload';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.formData();
  const file = data.get('file');
  try {
    // const request = await requestuest.json();
    const name = data?.get('name') || '';
    const subCategories = data?.get('sub') || '';
    const result = await imageUploader(file)
    const image = result?.fileUrl
      


    if (!name){
        throw new Error({ error: 'name is required' })
    }
    const newCategory = new Category({
        category: name,
        image: image,
        subCategories: subCategories.split(' ')
    })
    console.log("🚀 ~ file: route.js:38 ~ POST ~ newCategory:", newCategory)
    await newCategory.save()
    return NextResponse.json({ success: `category ${name} was created` })
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error: error.message })
  }
}