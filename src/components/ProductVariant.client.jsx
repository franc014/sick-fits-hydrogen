import { Image, useProductOptions } from "@shopify/hydrogen";

function ProductVariant({ variant }) {
  const { setSelectedVariant, selectedVariant } = useProductOptions();

  function handleChange() {
    console.log(variant);
    setSelectedVariant(variant);
  }

  return (
    <li>
      <label
        htmlFor={`option[${variant.id}]`}
        className={`flex flex-col w-40 h-40 cursor-pointer ${
          selectedVariant.id === variant.id ? `product-selected` : ""
        }`}
      >
        <Image
          data={variant.image}
          className="w-40 h-40 object-cover overflow-hidden mb-4"
        />
        <p className="">{variant.title}</p>
        <input
          className="variant-option-box"
          type="radio"
          name={`option[${variant.id}]`}
          id={`option[${variant.id}]`}
          value={selectedVariant?.id}
          onChange={(e) => handleChange(e)}
          checked={selectedVariant.id === variant.id}
        />
      </label>
    </li>
  );
}

export default ProductVariant;
