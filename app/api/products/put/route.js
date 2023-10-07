import { Product } from '@/db/product';
import imageUploader from '@/functions/imageUpload';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.formData();
  console.log("🚀 ~ file: route.js:7 ~ POST ~ data:", data)
  try {
    // const request = await requestuest.json();
    const name = data?.get('name') || '';
    const category = data?.get('category') || '';
    const subCategory = data?.get('sub') || '';
    const description = data?.get('description') || '';
    const price = data?.get('price') || '';
    const stock = data?.get('stock') || '';
    const tags = data.get('tags') || '';
    const options = data.get('options') || '';

    let imagesLinks = []
    for (const [name, value] of data) {
        if(name.includes('images')){
            const result = await imageUploader(value)
            const image = result?.fileUrl
            imagesLinks.push(image)
        }
    }
    console.log(imagesLinks);
    const newProduct = new Product({
        name,
        category,
        subCategory,
        description,
        price,
        stock,
        tags,
        options,
        images: imagesLinks
    })

    await newProduct.save()

    return NextResponse.json({ success: `product ${name} was created` })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message })
  }
}