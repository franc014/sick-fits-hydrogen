import { gql, useRouteParams, useShopQuery } from "@shopify/hydrogen";
import { Layout } from "../../components/Layout.server";
import SingleProduct from "../../components/SingleProduct.client";
import { ProductOptionsProvider } from "@shopify/hydrogen";

const PRODUCT_BY_HANDLE_QUERY = gql`
  query ProductBuHandle($handle: String!) {
    product(handle: $handle) {
      title
      description
      image: featuredImage {
        url
        width
        height
        altText
      }
      variants(first: 20) {
        nodes {
          id
          selectedOptions {
            name
            value
          }
          compareAtPriceV2 {
            amount
          }
          priceV2 {
            amount
          }
          quantityAvailable
        }
      }
    }
  }
`;

export default function Product() {
  const { handle } = useRouteParams();
  const result = useShopQuery({
    query: PRODUCT_BY_HANDLE_QUERY,
    variables: {
      handle,
    },
  });

  console.log("prod", result.data.product);

  return (
    <Layout>
      <ProductOptionsProvider data={result.data.product}>
        <SingleProduct product={result.data.product}></SingleProduct>
      </ProductOptionsProvider>
    </Layout>
  );
}
