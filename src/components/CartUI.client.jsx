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

export function Cart() {
  const { cartOpen, closeCart } = useCartUIContext();
  const { lines } = useCart();

  if (lines.length === 0) {
    return <CartEmpty closeCart={closeCart} cartOpen={cartOpen} />;
  }
  return (
    <div
      className={`border-l border-zinc-200 p-5 fixed bg-white top-0 right-0 w-1/2 
    bottom-0 shadow-2xl z-10 grid cart ${
      cartOpen ? "bg-zinc-100 translate-x-0" : "bg-orange-200 translate-x-full"
    }`}
    >
      <header className="border-b border-stone-700 mb-8 pb-8">
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
        className="border-t-2 border-stone-400 border-dashed
      mt-8 pt-8 items-center text-4xl font-bold flex justify-between"
      >
        {/* {cost && `$`} {cost?.totalAmount?.amount} */}
        <CartCost className="m-0 text-2xl" amountType="total" />

        {/* <CheckoutButton /> */}
        <CartCheckoutButton className="text-xl w-52 font-bold shadow-xl shadow-zinc-300 bg-red-600 py-3 px-2 text-white">
          Checkout
        </CartCheckoutButton>
      </footer>
    </div>
  );
}

function CartEmpty({ closeCart, cartOpen }) {
  return (
    <div
      className={`border-l border-zinc-200 p-5 fixed bg-white top-0 right-0 w-1/2 
    bottom-0 shadow-2xl z-10 flex flex-col items-center justify-center ${
      cartOpen ? "bg-zinc-100 translate-x-0" : "bg-orange-200 translate-x-full"
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
