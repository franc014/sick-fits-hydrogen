import { useRouteParams } from "@shopify/hydrogen";

import { Layout } from "../../../components/Layout.server";
import Pagination from "../../../components/Pagination.client";
import ProductPaginationProvider from "../../../components/ProductPaginationProvider.client";

function ProductsPage() {
  const { page } = useRouteParams();

  return (
    <Layout>
      <h1>Products</h1>
      <p>Showing products from 1 to n</p>
      <div className=" my-12">
        List of products
        <ProductPaginationProvider>
          <Pagination />
        </ProductPaginationProvider>
      </div>
    </Layout>
  );
}

export default ProductsPage;
