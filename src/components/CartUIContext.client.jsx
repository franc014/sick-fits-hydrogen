import { createContext, useContext } from "react";

const CartUIContext = createContext();
export default CartUIContext;

export function useCartUIContext() {
  const context = useContext(CartUIContext);
  if (!context) {
    throw new Error("No cart context found");
  }
  return context;
}
