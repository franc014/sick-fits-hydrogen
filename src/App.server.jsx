import renderHydrogen from "@shopify/hydrogen/entry-server";
import { Router, FileRoutes, ShopifyProvider } from "@shopify/hydrogen";
import { Suspense } from "react";
import CartProvider from "./components/CartProvider.client.jsx";

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <Router>
          <CartProvider>
            <FileRoutes />
          </CartProvider>
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
