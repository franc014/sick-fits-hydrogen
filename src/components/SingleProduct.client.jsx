import { AddToCartButton, Image, useProductOptions } from "@shopify/hydrogen";
import ProductVariant from "./ProductVariant.client";

function SingleProduct({ product }) {
  //console.log(product.variants.edges);
  const { variants, selectedVariant } = useProductOptions({
    variants: product.variants,
  });

  return (
    <form className="grid max-w-screen-lg justify-center items-top gap-8 single-product">
      <Image data={product.image} className="object-contain w-full" />

      <div className="details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3 className="mt-8">Variantes</h3>
        <ul className="mb-10">
          {variants.map((variant) => {
            return <ProductVariant variant={variant} key={variant.id} />;
          })}
        </ul>
        <AddToCartButton
          variantId={selectedVariant.id}
          quantity={1}
          accessibleAddingToCartLabel="Adding item to your cart"
        >
          <span className="border border-stone-400 py-4 px-2">
            Add {product.title}-{selectedVariant.title} to Cart
          </span>
        </AddToCartButton>
      </div>
    </form>
  );
}

export default SingleProduct;
