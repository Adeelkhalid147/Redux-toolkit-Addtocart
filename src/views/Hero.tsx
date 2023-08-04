import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import herogirl from "../../public/herogirl.webp"
import { ShoppingCart } from 'lucide-react';
import image from "next/image"
import Image from 'next/image';
import brand1 from "../../public/brand1.webp"
import brand2 from "../../public/brand2.webp"
import brand3 from "../../public/brand3.webp"
import brand4 from "../../public/brand4.webp"

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10  py-6 '>
        {/* Left Div */}
        <div className='flex-1'>
        <Badge className='py-3 px-6 rounded-lg text-[#2435FF] bg-[#E1EDFF]'>Badge</Badge>
        <h1 className="mt-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
        An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Button className='bg-black h-12 px-8 mt-4'>Start Shopping</Button>


      <div className='flex gap-6 mt-10'>
    <Image src={brand1} alt='brand1'/>
    <Image src={brand2} alt='brand2'/>
    <Image src={brand3} alt='brand3'/>
    <Image src={brand4} alt='brand4'/>
      </div>


        </div>





        {/* Right Div */}
        <div  className='flex-1 bg-[#FFECE3] rounded-full'>
           <Image src={herogirl} alt='product2'/>
        </div>

    </section>
  )
}

export default Hero