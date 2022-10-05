import {
  CartLineImage,
  useCartLine,
  useCart,
  CartLineQuantityAdjustButton,
} from "@shopify/hydrogen";
import { useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
  const nodeRef = useRef();

  return (
    <li className="py-4 px-0 border-b border-neutral-400 grid cart-line">
      <CartLineImage className="outline-1  w-32 h-32 object-cover mr-4 shadow-md shadow-neutral-200" />
      <div className="flex flex-col justify-start line-product-details">
        <h3 className="m-0">{merchandise.product.title}</h3>
        <h4 className="m-0">{merchandise.title}</h4>

        <div>
          <TransitionGroup>
            <CSSTransition
              nodeRef={nodeRef}
              unmountOnExit
              className="line-quantity"
              classNames="line-quantity"
              key={quantity}
              timeout={{ enter: 400, exit: 400 }}
            >
              <span>{cost.totalAmount.amount}</span>
            </CSSTransition>

            {cost.totalAmount.currencyCode}
          </TransitionGroup>
        </div>
        <div>
          <p className="mb-2">
            {quantity} &times; {merchandise.priceV2.amount} each
          </p>

          <div className="flex gap-2">
            <CartLineQuantityAdjustButton
              className="w-6 h-6 py-2  flex rounded-full bg-zinc-800 text-white items-center justify-center text-sm"
              adjust="increase"
            >
              <span className="-mt-1">+</span>
            </CartLineQuantityAdjustButton>
            <CartLineQuantityAdjustButton
              className="w-6 h-6 py-2  flex rounded-full bg-zinc-800 text-white items-center justify-center text-sm"
              adjust="decrease"
            >
              <span className="-mt-1">-</span>
            </CartLineQuantityAdjustButton>
          </div>
        </div>
      </div>

      <RemoveFromCart lineId={id} />
    </li>
  );
}

export default CartLine;
