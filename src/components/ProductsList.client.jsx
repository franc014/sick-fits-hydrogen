import { useCallback, useEffect, useRef, useState } from "react";
import { ProductCard } from "./ProductCard.client";

function ProductsList({ products, pageInfo }) {
  const { endCursor, hasNextPage } = pageInfo;
  //const [initialProducts, setInitialProducts] = useState(products);
  const [nextPage, setNextPage] = useState(hasNextPage);
  const [cursor, setCursor] = useState(endCursor);
  const [allProducts, setProducts] = useState(products);
  const [pending, setPending] = useState(false);
  const moreButtonRef = useRef(null);

  const fetchProduts = useCallback(async function () {
    setPending(true);
    const result = await fetch(
      "/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          cursor,
        }),
      },
      [nextPage, cursor, allProducts]
    );
    const { data } = await result.json();
    setProducts([...allProducts, ...data.products.nodes]);
    //setInitialProducts([...initialProducts, ...data.products.nodes]);
    setNextPage(data.products.pageInfo.hasNextPage);
    setCursor(data.products.pageInfo.endCursor);
    setPending(false);
  });

  const handleIntersect = useCallback(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchProduts();
        }
      });
    },
    [fetchProduts]
  );

  useEffect(
    function () {
      const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      });

      const moreButton = moreButtonRef.current;
      if (moreButton) observer.observe(moreButton);

      return function () {
        if (moreButton) observer.unobserve(moreButton);
      };
    },
    [moreButtonRef, cursor, handleIntersect]
  );

  function handleLoadMoreProducts() {
    fetchProduts();
  }
  return (
    <div>
      <div className="grid grid-cols-2 gap-14">
        {allProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      {nextPage && (
        <div ref={moreButtonRef}>
          <button className="button my-4" onClick={handleLoadMoreProducts}>
            {pending ? `loading...` : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
