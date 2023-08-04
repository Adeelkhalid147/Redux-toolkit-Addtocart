import ProductCard from "@/components/ui/ProductCard";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";

// ak function bnya h us mai product k sari items ko match kr k filter kiya h or jo matcch hoe
// hai on ko show krna h jse k female match ho to female k page mai sirf female ka data ae

const getProductsByCategory = (category: string) => {
  return Products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);
  return  <div className="flex justify-evenly mt-16 py-10 flex-wrap">

    {result.length > 0 ?  
  result.map((product, index) => (
    <ProductCard
      key={index}
      title={product.name}
      price={product.price}
      image={product.img}
      catagory={product.category}
      id={product.id}
    />
  )) : <p>No Products Found</p>}
</div>;
}
