import { useCart, useCartLine } from "@shopify/hydrogen";

function RemoveFromCart({ lineId }) {
  const { id: cartId, linesRemove } = useCart();
  /*  const { id: cartId, linesRemove } = useCart();
  const { id: cartLineId } = useCartLine(); */
  function removeLine() {
    const result = linesRemove(lineId);
    console.log({ result });
    /* console.log(cartId, linesRemove); */
  }
  return (
    <button className="text-3xl" onClick={removeLine}>
      &times;
    </button>
  );
}

export default RemoveFromCart;
