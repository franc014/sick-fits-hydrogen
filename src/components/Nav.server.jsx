import { Link } from "@shopify/hydrogen";
import OpenCartButton from "./OpenCartButton.client";
export function Nav() {
  return (
    <nav className="m-0 p-0 flex items-center justify-self-end fs-xl">
      <Link
        to="/products"
        className="py-2 px-4 flex align-center relative uppercase font-bold  bg-transparent border-0 cursor-pointer"
      >
        Products
      </Link>
      <Link
        to="/orders"
        className="py-2 px-4 flex align-center relative uppercase font-bold  bg-transparent border-0 cursor-pointer"
      >
        Orders
      </Link>
      <OpenCartButton />
    </nav>
  );
}
