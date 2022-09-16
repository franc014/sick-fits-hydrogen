import { useProductOptions } from "@shopify/hydrogen";

function ProductVariant({ variant }) {
  const { setSelectedVariant, selectedVariant } = useProductOptions();

  function handleChange() {
    setSelectedVariant(variant);
  }

  return (
    <li>
      <label htmlFor={`option[${variant.id}]`}>
        {variant.title}
        <input
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
