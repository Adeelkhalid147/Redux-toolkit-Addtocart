import Quantity from "@/components/Quantity";
import { Products } from "@/utils/mock";
import Image from "next/image"
import { StaticImageData } from "next/image";


const getProductsDetail = (id:number | string) => {
  return Products.filter((product) => product.id == id);
};


const sizes = ["xs","sm","md","lg","xl"]
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  return  <div className="flex mt-16 py-10 flex-wrap">

    { 
  result.map((product, index) => (
   <div key={index} className="flex justify-between gap-6">
    {/* left image */}
    <div>
       <Image src={product.img} alt={product.name}/>
    </div>
    {/* right content */}
    <div>
    <div>
        <h1 className="text-2xl">{product.name}</h1>
        <h2 className="text-base text-gray-300 font-semibold">{product.tagline}</h2>
    </div>
    <div>
        <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
        {/* sizes */}
        <div className="flex gap-x-3">
        {
            sizes.map((item,index)=>{
                return (
        <div key={index} className="h-8 w-8 rounded-full duration-300 hover:shadow-xl border mt-2 center">
        <span className="text-xs font-semibold text-center text-gray-500 cursor-pointer">{item}</span>
        </div>
                )
            })
        }
        </div>
        {/* Quantity */}
        <div className="flex gap-x-3 mt-6 items-center">
           <h3 className="text-[10px] font-semibold">Quantity:</h3>
           <Quantity/>
        </div>

        {/* Add To Cart */}
        <div className="mt-5 flex justify-center items-center gap-x-4">
          <button className="border bg-black text-white px-2 py-3 rounded-md"> AddToCard</button>
          <h2 className="font-bold text-2xl">${product.price.toFixed(2)}</h2>
        </div>


        
    </div>
    </div>
   </div>
  ))}
  
</div>;
}
