import {
  useRouteParams,
  gql,
  useShopQuery,
  CacheLong,
} from "@shopify/hydrogen";
import { Layout } from "../../components/Layout.server";
import { ProductCard } from "../../components/ProductCard.client";

const COLLECTION_BY_HANDLE_QUERY = gql`
  query CollectionByHandleQuery($handle: String!) {
    collection(handle: $handle) {
      handle
      description
      title
      products(first: 100) {
        edges {
          node {
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
        }
      }
    }
  }
`;

export default function Collection() {
  const { handle } = useRouteParams();

  const result = useShopQuery({
    cache: CacheLong(),
    query: COLLECTION_BY_HANDLE_QUERY,
    variables: {
      handle,
    },
  });
  const collection = result.data.collection;
  const products = collection.products.edges;

  return (
    <Layout>
      <h1>{collection.title}</h1>
      <p>{collection.description}</p>
      <div className="grid grid-cols-2 gap-14 my-12">
        {products.map(({ node }) => {
          return <ProductCard key={node.id} product={node} />;
        })}
      </div>
    </Layout>
  );
}
