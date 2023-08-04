import React from 'react'
import product1 from "/public/product1.png"
import Image, { StaticImageData } from 'next/image'
import Link from "next/link"
import AddToCart from './AddToCart'

interface producttype {
    title:string,
    price:number,
    image:StaticImageData | string,
    catagory:string,
    id:number,
}

// props ak reserve key word h same word he likhna h agr speling ka fark hwa to km ni krta
// components mai props se he destructure krna h
function ProductCard(props:producttype)  {
  return (
    <Link href={`/products/${props.id}`}>
    <div className='py-5'>
<Image src={props.image} alt='product1'/>
<h3 className='font-bold text-lg mt-3'>{props.title}</h3>
<p className='font-bold text-lg '>${props.price}</p>
<p className='font-bold text-lg '>Catagory <span className='text-base font-normal capitalize'> {props.catagory}</span></p>
<AddToCart/>
    </div>
    </Link>
  )
}

export default ProductCard