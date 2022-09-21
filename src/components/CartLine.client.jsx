import {
  CartLineImage,
  useCartLine,
  useCart,
  CartLineQuantityAdjustButton,
} from "@shopify/hydrogen";

function RemoveFromCart({ lineId }) {
  const { linesRemove } = useCart();
  /*  const { id: cartId, linesRemove } = useCart();
  const { id: cartLineId } = useCartLine(); */
  function removeLine() {
    linesRemove(lineId);
    /* console.log(cartId, linesRemove); */
  }
  return (
    <button className="text-3xl" onClick={removeLine}>
      &times;
    </button>
  );
}

function CartLine() {
  const { cost, merchandise, quantity, id } = useCartLine();

  return (
    <li className="py-4 px-0 border-b border-b-stone-500 grid cart-line">
      <CartLineImage className="w-32 object-contain mr-4" />
      <div className="flex flex-col justify-start line-product-details">
        <h3 className="m-0">{merchandise.title}</h3>
        <p>
          {cost.totalAmount.amount} {cost.totalAmount.currencyCode}
        </p>
        <em className="mb-4">
          {quantity} &times; {merchandise.priceV2.amount} each
        </em>
        <div className="flex gap-2">
          <CartLineQuantityAdjustButton
            adjust="increase"
            className="bg-stone-800 text-white py-3 px-2 text-xs"
          >
            Increase quantity
          </CartLineQuantityAdjustButton>

          <CartLineQuantityAdjustButton
            adjust="decrease"
            className="bg-stone-800 text-white py-3 px-2 text-xs"
          >
            Decrease quantity
          </CartLineQuantityAdjustButton>
        </div>
      </div>

      <RemoveFromCart lineId={id} />
    </li>
  );
}

export default CartLine;
