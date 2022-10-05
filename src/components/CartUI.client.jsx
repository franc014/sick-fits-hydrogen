import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  useCart,
  CartLineProvider,
  CartCost,
  CartCheckoutButton,
} from "@shopify/hydrogen";
import CartLine from "./CartLIne.client";
import { useCartUIContext } from "./CartUIContext.client";
/* import CheckoutButton from "./CheckoutButton.client"; */
import CloseButton from "./CloseButton.client";
import { useRef } from "react";

export function Cart() {
  const { cartOpen, closeCart } = useCartUIContext();
  const { lines, cost } = useCart();

  const nodeRef = useRef();
  if (lines.length === 0) {
    return <CartEmpty closeCart={closeCart} cartOpen={cartOpen} />;
  }
  return (
    <div
      className={`border-l border-neutral-300 p-5 fixed  top-0 right-0 w-1/2 
    bottom-0 shadow-xl shadow-neutral-400 z-10 grid cart transition ease-in-out delay-150 bg-neutral-100${
      cartOpen ? "  translate-x-0 " : " translate-x-full"
    }`}
    >
      <header className="border-b border-neutral-300 mb-8 pb-8">
        {/*  <Supreme>{me.name}'s Cart</Supreme> */}
        <h3 className="bg-red-600 text-white inline-block px-1 py-2 -skew-x-3 m-0 text-7xl">
          Your Cart
        </h3>
      </header>
      {/* <CloseButton onClick={closeCart} type="button">
        &times;
      </CloseButton> */}
      <CloseButton closeCart={closeCart} />
      <ul className="m-0 p-0 list-none overflow-scroll">
        {lines.map((line) => {
          return (
            <CartLineProvider key={line.id} line={line}>
              <CartLine />
            </CartLineProvider>
          );
        })}
      </ul>
      <footer
        className="border-t border-neutral-600 border-dashed
      mt-8 pt-8 items-center text-4xl font-bold flex justify-between"
      >
        {/* {cost && `$`} {cost?.totalAmount?.amount} */}
        <div className="cart-total-animation ">
          <TransitionGroup component={null}>
            <CSSTransition
              nodeRef={nodeRef}
              unmountOnExit
              className="cartQuantity"
              classNames="cartQuantity"
              key={cost.totalAmount.amount}
              timeout={{ enter: 0, exit: 0 }}
            >
              <div ref={nodeRef}>
                <CartCost className="m-0 text-2xl" amountType="total" />
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>

        {/* <CheckoutButton /> */}
        <CartCheckoutButton
          className="text-xl w-52 font-bold shadow-xl shadow-zinc-300 
        bg-red-600 py-3 px-2 text-white"
        >
          Checkout
        </CartCheckoutButton>
      </footer>
    </div>
  );
}

function CartEmpty({ closeCart, cartOpen }) {
  return (
    <div
      className={`border-l border-neutral-300 p-5 fixed  top-0 right-0 w-1/2 
    bottom-0 shadow-xl shadow-neutral-400 z-10 grid cart transition ease-in-out delay-150 bg-neutral-100${
      cartOpen ? "  translate-x-0 " : " translate-x-full"
    }`}
    >
      <div className="flex-col justify-center items-center">
        <h2>Your cart is empty</h2>
        <button className="button tracking-wider" onClick={closeCart}>
          Close cart
        </button>
      </div>
    </div>
  );
}
