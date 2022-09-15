import { CartLineImage, useCartLine } from "@shopify/hydrogen";

function CartLine() {
  const { cost, merchandise } = useCartLine();

  return (
    <li>
      <CartLineImage />
      {merchandise.title}-{cost.totalAmount.amount}
      {cost.totalAmount.currencyCode}
    </li>
  );
}

export default CartLine;
