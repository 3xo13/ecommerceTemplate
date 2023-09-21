import { Category } from '@/db/category';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const req = await request.json();
    const name = req?.name || ''
    const images = req?.images || []
    const subCategories = req?.subCategories || ''

    if (!name){
        throw new Error({ error: 'name is required' })
    }
    const newCategory = new Category({
        name: name,
        images: images,
        subCategories: subCategories
    })
    await newCategory.save()
    return NextResponse.json({ success: `category ${name} was created` })
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error: error.message })
  }
}