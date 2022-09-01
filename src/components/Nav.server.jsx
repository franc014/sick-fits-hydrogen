import { Link } from "@shopify/hydrogen";
export function Nav() {
  return (
    <nav className="m-0 p-0 flex justify-self-end fs-xl">
      <Link
        to="/products"
        className="py-2 px-4 flex align-center relative uppercase font-bold fs-xl bg-transparent border-0 cursor-pointer"
      >
        Products
      </Link>
      <Link to="/orders">Orders</Link>
    </nav>
  );
}
