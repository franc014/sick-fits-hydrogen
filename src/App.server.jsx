import renderHydrogen from "@shopify/hydrogen/entry-server";
import { Router, FileRoutes, ShopifyProvider } from "@shopify/hydrogen";
import { Suspense } from "react";
import { CartProvider } from "@shopify/hydrogen";
import CartUIProvider from "./components/CartUIProvider.client";

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <CartUIProvider>
          <CartProvider>
            <Router>
              <FileRoutes />
            </Router>
          </CartProvider>
        </CartUIProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
