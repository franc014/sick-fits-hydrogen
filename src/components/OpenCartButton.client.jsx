import { useCart } from "@shopify/hydrogen";
import { useCartUIContext } from "./CartUIContext.client";

function OpenCartButton() {
  const { openCart } = useCartUIContext();
  const { totalQuantity } = useCart();

  return (
    <button className="header-nav-item" type="button" onClick={openCart}>
      <span className="inline-block mr-4">Cart</span>
      <span className=" bg-red-600  text-white p-2 w-10 h-10 items-center justify-center rounded-full inline-block">
        {totalQuantity}
      </span>
    </button>
  );
}

export default OpenCartButton;
