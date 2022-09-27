import { gql, useShopQuery } from "@shopify/hydrogen";

import { Layout } from "../../../components/Layout.server";
import Pagination from "../../../components/Pagination.client";
import ProductPaginationProvider from "../../../components/ProductPaginationProvider.client";

const PRODUCTS_QUERY = gql`
  query products_query {
    products(first: 100) {
      edges {
        cursor
        node {
          id
        }
      }
    }
  }
`;

function ProductsPage() {
  const result = useShopQuery({
    query: PRODUCTS_QUERY,
  });

  const totalProducts = result?.data?.products?.edges?.length;
  const products = result?.data?.products?.edges;

  const productsByPage = 2;
  let pages = Math.ceil(totalProducts / productsByPage);

  return (
    <Layout>
      <h1>Products</h1>
      <p>Showing products from 1 to n</p>
      <div className=" my-12">
        List of products
        <ProductPaginationProvider products={products}>
          <Pagination />
        </ProductPaginationProvider>
      </div>
    </Layout>
  );
}

export default ProductsPage;
