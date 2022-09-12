import { Image, Link } from "@shopify/hydrogen";

export function CollectionCard({ collection }) {
  return (
    <div className="bg-white border border-stone-300 relative flex flex-col shadow-2xl">
      <Image data={collection.image} className="w-full h-80 object-cover " />

      <h3>
        <Link
          to={`/collections/${collection.handle}`}
          className="bg-red-600 inline leading-5 text-5xl text-center text-white py-0 px-4 "
        >
          {collection.title}
        </Link>
      </h3>
      {/* <PriceTag>{formatMoney(product.price)}</PriceTag> */}

      <p className="flex-grow mt-2 py-6 px-12 leading-7">
        {collection.description}
      </p>
      {/* <div className="buttonList">
        
      
        
      </div> */}
    </div>
  );
}
