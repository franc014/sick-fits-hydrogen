import renderHydrogen from "@shopify/hydrogen/entry-server";
import { Router, FileRoutes, ShopifyProvider } from "@shopify/hydrogen";
import { Suspense } from "react";
import { CartProvider } from "@shopify/hydrogen";
import CartUIProvider from "./components/CartUIProvider.client";

function App() {
  return (
    <Suspense fallback={<AppFallback />}>
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

function AppFallback() {
  return (
    <div className="bg-rose-200 w-full h-screen app-fallback tracking-widest text-stone-200 flex items-center justify-center text-7xl">
      LOADING...
    </div>
  );
}

export default renderHydrogen(App);
