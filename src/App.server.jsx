import renderHydrogen from "@shopify/hydrogen/entry-server";
import { Router, FileRoutes, ShopifyProvider } from "@shopify/hydrogen";
import { Suspense } from "react";
import { CartProvider } from "@shopify/hydrogen";
import CartUIProvider from "./components/CartUIProvider.client";

function App() {
  return (
    <Suspense fallback={null}>
      <CartUIProvider>
        <ShopifyProvider>
          <CartProvider>
            <Router>
              <FileRoutes />
            </Router>
          </CartProvider>
        </ShopifyProvider>
      </CartUIProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
