import { Link } from "@shopify/hydrogen";
import { useProductPaginationContext } from "./ProductPaginationContext.client";

function Pagination() {
  const { productsList, pageNumber } = useProductPaginationContext();

  return (
    <div>
      <ul className="flex gap-4">
        {Array.from({ length: pageNumber }, (v, index) => {
          return (
            <li key={index}>
              <Link to={`/products/pages/${index + 1}`}>{index + 1}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;
