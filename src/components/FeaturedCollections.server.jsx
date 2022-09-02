import { CacheLong, gql, useShopQuery } from "@shopify/hydrogen";
import { CollectionCard } from "./CollectionCard.server";

const FEATURED_COLLECTIONS_QUERY = gql`
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart", sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        description
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;

export function FeaturedCollections() {
  const result = useShopQuery({
    query: FEATURED_COLLECTIONS_QUERY,
    cache: CacheLong(),
  });
  const collections = result.data.collections.nodes;
  return (
    <section className="grid grid-cols-2 gap-14">
      {collections.map((collection) => {
        return <CollectionCard key={collection.id} collection={collection} />;
      })}
    </section>
  );
}
