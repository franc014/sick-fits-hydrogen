import { defineConfig } from "@shopify/hydrogen/config";

export default defineConfig({
  shopify: {
    storeDomain: "virtual-fits.myshopify.com",
    storefrontToken: "b3da4e28463765fa1b4e0b10631bd8a6",
    storefrontApiVersion: "2022-07",
  },
  logger: {
    showQueryTiming: false,
  },
  //plugins: [hydrogen({ experimental: { css: "global" } })],
});
