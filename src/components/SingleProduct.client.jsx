import { Image, useProductOptions } from "@shopify/hydrogen";
import ProductVariant from "./ProductVariant.client";

function SingleProduct({ product }) {
  //console.log(product.variants.edges);
  const { variants, selectedVariant, setSelectedVariant } = useProductOptions();
  console.log(variants);
  return (
    <div className="grid max-w-screen-lg justify-center items-top gap-8 single-product">
      <Image data={product.image} className="object-contain w-full" />
      <div className="details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3 className="mt-8">Variantes</h3>
        <ul>
          {variants.map((variant) => {
            return <ProductVariant key={variant.id} variant={variant} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SingleProduct;
