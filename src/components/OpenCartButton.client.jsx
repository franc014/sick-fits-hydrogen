import { useCartUIContext } from "./CartUIContext.client";
import CartCount from "./CartCount.client";

function OpenCartButton() {
  const { openCart } = useCartUIContext();

  return (
    <button
      type="button"
      onClick={openCart}
      className="open-cart-btn py-4 px-12 flex items-center relative uppercase font-bold bg-none border-0 cursor-pointer "
    >
      My Cart
      <CartCount />
    </button>
  );
}

export default OpenCartButton;
