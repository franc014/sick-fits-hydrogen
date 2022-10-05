import renderHydrogen from "@shopify/hydrogen/entry-server";
import { Router, FileRoutes, ShopifyProvider } from "@shopify/hydrogen";
import { CartProvider } from "@shopify/hydrogen";
import CartUIProvider from "./components/CartUIProvider.client";
import { DefaultSeo } from "./components/DefaultSeo.server";

function App() {
  return (
    <ShopifyProvider>
      <DefaultSeo />
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
