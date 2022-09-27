import { useEffect, useState } from "react";
import ProductPaginationContext from "./ProductPaginationContext.client";

function ProductPaginationProvider({ children, products }) {
  const [productsList, setProductList] = useState([]);

  useEffect(
    function () {
      setProductList(products);
    },
    [products]
  );

  const totalProducts = productsList?.length;
  const productsByPage = 2;
  const pageNumber = Math.ceil(totalProducts / productsByPage);
  const value = { productsList, pageNumber };
  //todo: set number of page: productId, and cursor, to query in a child
  //component based on these arguments
  //ex: [{page:1, product:{id:1jijllfsdfdsfjl,cursor:'jkjlkjljlj'}}];

  return (
    <ProductPaginationContext.Provider value={value}>
      {children}
    </ProductPaginationContext.Provider>
  );
}

export default ProductPaginationProvider;
