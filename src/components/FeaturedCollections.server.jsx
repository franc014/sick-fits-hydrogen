import { CacheLong, gql, useShopQuery } from "@shopify/hydrogen";
import { Suspense } from "react";
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
    preload: true,
  });
  const collections = result.data.collections.nodes;
  return (
    <div>
      <h1>Collections</h1>
      <Suspense fallback={<CollectionsFallback />}>
        <section className="grid grid-cols-2 gap-14">
          {collections.map((collection) => {
            return (
              <CollectionCard key={collection.id} collection={collection} />
            );
          })}
        </section>
      </Suspense>
    </div>
  );
}

function CollectionsFallback() {
  return (
    <section className="grid grid-cols-2 gap-14 bg-lime-600">
      <div className="w-80 h-28 bg-red-300"></div>
      <div className="w-80 h-28 bg-red-300"></div>
      <div className="w-80 h-28 bg-red-300"></div>
      <div className="w-80 h-28 bg-red-300"></div>
    </section>
  );
}
