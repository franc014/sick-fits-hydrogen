import { CartStateProvider } from "../lib/cartState.js";

export default function CartProvider({ children }) {
  return <CartStateProvider>{children}</CartStateProvider>;
}
