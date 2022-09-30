import { useCartUIContext } from "./CartUIContext.client";

function OpenCartButton() {
  const { openCart } = useCartUIContext();
  return (
    <button className="header-nav-item" type="button" onClick={openCart}>
      Cart
    </button>
  );
}

export default OpenCartButton;
