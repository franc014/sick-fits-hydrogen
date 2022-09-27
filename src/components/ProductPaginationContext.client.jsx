import { createContext, useContext } from "react";

const ProductPaginationContext = createContext();
export default ProductPaginationContext;

export function useProductPaginationContext() {
  const context = useContext(ProductPaginationContext);
  if (!context) {
    throw new Error("No cart context found");
  }
  return context;
}
