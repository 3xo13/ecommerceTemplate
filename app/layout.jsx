import '../styles/globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { connectToDB } from '@/db/connectToDB'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce',
  description: 'ecommerce template, created by Karem using next.js',
}

export default async function RootLayout({ children }) {
  // console.log(children.props.childProp.segment);
  const childName = children.props.childProp.segment;
  try {
    await connectToDB()
  } catch (error) {
    console.log(error);
  }
  return (
    <html lang="en">
      <body className={`${inter.className} w-[100dvw] max-w-[100dvw] overflow-x-hidden `}>
        {childName != 'dashboard' && <Header />}
        {children}
        {childName != 'dashboard' && <Footer />}
        </body>
    </html>
  )
}
