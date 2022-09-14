import { useCartUIContext } from "./CartUIContext.client";

function OpenCartButton() {
  const { openCart } = useCartUIContext();
  return (
    <button type="button" onClick={openCart}>
      Cart
    </button>
  );
}

export default OpenCartButton;
