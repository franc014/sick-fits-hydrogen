import { gql } from "@shopify/hydrogen";
import { FeaturedCollections } from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";

const PRODUCTS_SEARCH_QUERY = gql`
  query productsSearchQuery($first: Int!, $searchTerm: String!) {
    products(first: $first, query: $searchTerm) {
      nodes {
        id
        title
        description
        featuredImage {
          url
          width
          height
          altText
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <Layout>
      <FeaturedCollections></FeaturedCollections>
    </Layout>
  );
}

export async function api(request, { queryShop }) {
  const payload = await request.json();
  const result = await queryShop({
    query: PRODUCTS_SEARCH_QUERY,
    variables: {
      searchTerm: payload.searchTerm,
      first: 10,
    },
  });

  return new Response(JSON.stringify({ data: result.data.products }), {
    headers: { "Content-Type": "application/json" },
  });
}
