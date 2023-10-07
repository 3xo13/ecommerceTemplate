import { Product } from '@/db/product';
import { NextResponse } from 'next/server';

export async function GET(request) {

  try {
    const products = await Product.find({})

    return NextResponse.json(products)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message })
  }
}