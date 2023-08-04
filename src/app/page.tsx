import Image from 'next/image'
import Header from "@/components/layout/Header"
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'



export default function Home() {
     return (
      <div>
       <Hero/>
       {/* Products */}
       <ProductList/>
      </div>
     )
    }



































// import { Button } from "@/components/ui/button"
// import { Mail } from "lucide-react"
// import { Heart } from "lucide-react"


// export default function Home() {
//   return (
//   <div className='m-6'>
//    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
//       Adeel Khalid
//     </h1>
//     <p className="leading-7 [&:not(:first-child)]:mt-6">
//       The king, seeing how much happier his subjects were, realized the error of
//       his ways and repealed the joke tax.<br/>
//       The king, <br/>
//       seeing how much happier his subjects were
//     </p>
//     <Button className='mt-4'>
//     <Heart className="mr-2 h-4 w-4" />
//       <Mail className="mr-2 h-4 w-4" />
//       Button</Button>
    
//   </div>
//   )
// }
