import { CartLineImage, useCartLine } from "@shopify/hydrogen";

function CartLine() {
  const { cost, merchandise, quantity } = useCartLine();
  console.log({ cost, merchandise });

  return (
    <li className="py-4 px-0 border-b border-b-stone-500 grid cart-line">
      <CartLineImage className="w-32 object-contain mr-4" />
      <div>
        <h3 className="m-0">{merchandise.title}</h3>
        <p>
          {cost.totalAmount.amount} {cost.totalAmount.currencyCode}
        </p>
        <em>
          {quantity} &times; {merchandise.priceV2.amount} each
        </em>
      </div>
    </li>
  );
}

export default CartLine;
