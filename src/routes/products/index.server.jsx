import { CacheLong, gql, useShopQuery } from "@shopify/hydrogen";
import { Layout } from "../../components/Layout.server";
import ProductsList from "../../components/ProductsList.client";

const ALL_PRODUCTS_QUERY = gql`
  query allProductsQuery {
    products(first: 2) {
      nodes {
        id
        title
        description
        handle
        image: featuredImage {
          url
          width
          height
          altText
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const PAGINATED_PRODUCTS_QUERY = gql`
  query allProductsQuery($cursor: String) {
    products(first: 2, after: $cursor) {
      nodes {
        id
        title
        description
        handle
        image: featuredImage {
          url
          width
          height
          altText
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

function ProductsPage() {
  const { data } = useShopQuery({
    query: ALL_PRODUCTS_QUERY,
    cache: CacheLong(),
    preload: true,
  });
  return (
    <Layout>
      <h1>Products</h1>
      <ProductsList
        products={data.products.nodes}
        pageInfo={data.products.pageInfo}
      ></ProductsList>
    </Layout>
  );
}

export async function api(request, { queryShop }) {
  const payload = await request.json();

  const { data } = await queryShop({
    query: PAGINATED_PRODUCTS_QUERY,
    variables: {
      cursor: payload.cursor,
    },
    preload: true,
  });

  //console.log({ result });

  return new Response(JSON.stringify({ data }), {
    headers: { "Content-Type": "application/json" },
  });
}

export default ProductsPage;
