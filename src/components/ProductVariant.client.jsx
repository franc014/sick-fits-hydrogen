function ProductVariant({ variant }) {
  return (
    <li>
      <label htmlFor={variant.id}>
        {variant.id}
        <input type="checkbox" name={variant.id} value={variant.id} />
      </label>
    </li>
  );
}

export default ProductVariant;
