import { useCart, CartLineProvider } from "@shopify/hydrogen";
import CartLine from "./CartLIne.client";
import { useCartUIContext } from "./CartUIContext.client";
import CheckoutButton from "./CheckoutButton.client";
import CloseButton from "./CloseButton.client";

export function Cart() {
  const { cartOpen, closeCart } = useCartUIContext();
  const { lines, cost } = useCart();

  return (
    <div
      className={`p-5 fixed bg-white h-full top-0 right-0 w-1/2 
    bottom-0 shadow-2xl z-10 grid cart ${
      cartOpen ? "bg-stone-300 translate-x-0" : "bg-orange-200 translate-x-full"
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
        <p className="m-0 text-2xl">$ {cost?.totalAmount?.amount}</p>
        <CheckoutButton />
      </footer>
    </div>
  );
}
