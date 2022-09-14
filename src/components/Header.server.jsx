import { Link } from "@shopify/hydrogen";
import { Cart } from "./CartUI.client";
import { Nav } from "./Nav.server";

export function Header() {
  return (
    <header>
      <div className="grid  justify-between items-stretch bar-box layout-bar-grid">
        <h1 className="text-2xl font-bold ml-4 relative z-10 -skew-x-6 bg-red-600">
          <Link
            to="/"
            className="text-white no-underline uppercase py-2 px-3 flex items-center justify-center"
          >
            Sick Fits
          </Link>
        </h1>
        <Nav></Nav>
      </div>
      <Cart />
      <div className="grid  bar-box layout-subbar-grid">search</div>
    </header>
  );
}
