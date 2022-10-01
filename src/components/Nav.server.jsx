import { Link } from "@shopify/hydrogen";
import OpenCartButton from "./OpenCartButton.client";
export function Nav() {
  return (
    <nav className="m-0 p-0 flex items-center justify-center fs-xl nav-bar">
      <Link to="/products" className="header-nav-item">
        Products
      </Link>
      <Link to="/orders" className="header-nav-item">
        Orders
      </Link>
      <OpenCartButton />
    </nav>
  );
}
