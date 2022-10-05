import { gql, useRouteParams, useShopQuery, Seo } from "@shopify/hydrogen";
import { Layout } from "../../components/Layout.server";
import SingleProduct from "../../components/SingleProduct.client";
import { ProductOptionsProvider } from "@shopify/hydrogen";
import { Suspense } from "react";

const PRODUCT_BY_HANDLE_QUERY = gql`
  query ProductByHandle($handle: String!) {
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
          title
          image {
            url
            width
            height
            altText
          }
          selectedOptions {
            name
            value
          }
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
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
    preload: true,
  });

  return (
    <Layout>
      <Seo type="product" data={result.data.product} />
      <Suspense fallback={<SingleProductFallback />}>
        <ProductOptionsProvider data={result.data.product}>
          <SingleProduct product={result.data.product}></SingleProduct>
        </ProductOptionsProvider>
      </Suspense>
    </Layout>
  );
}

function SingleProductFallback() {
  return <div className="h-[684px] w-[944px] bg-lime-400"></div>;
}
