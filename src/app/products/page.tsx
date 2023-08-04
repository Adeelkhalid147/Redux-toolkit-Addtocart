import product1 from "/public/product1.png";
import { Products } from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
import image from "next/image";

const AllProducts = () => {
  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
      {Products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.name}
          price={product.price}
          image={product.img}
          catagory={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
};
export default AllProducts;
