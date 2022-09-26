import renderHydrogen from "@shopify/hydrogen/entry-server";
import { Router, FileRoutes, ShopifyProvider } from "@shopify/hydrogen";
import { CartProvider } from "@shopify/hydrogen";
import CartUIProvider from "./components/CartUIProvider.client";

function App() {
  return (
    <ShopifyProvider>
      <CartUIProvider>
        <CartProvider>
          <Router>
            <FileRoutes />
          </Router>
        </CartProvider>
      </CartUIProvider>
    </ShopifyProvider>
  );
}

export default renderHydrogen(App);
