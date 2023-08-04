import React from 'react'
import product1 from "/public/product1.png"
import product3 from "/public/product3.png"
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { Products } from '@/utils/mock'

const ProductList = () => {
    const ProductChecks = Products.slice(0,3)  
    // console.log(ProductChecks)
  return (
    <div className='flex justify-evenly mt-16 py-10'>

    {
      ProductChecks.map((product,index)=>(
        <ProductCard key={index} title={product.name} price={product.price} image={product.img} catagory={product.category} id={product.id}/>
      ))
    }
    </div>
   
  )
}

export default ProductList