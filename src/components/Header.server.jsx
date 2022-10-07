import { Link } from "@shopify/hydrogen";
import { Cart } from "./CartUI.client";
import { Nav } from "./Nav.server";
import Search from "./Search.client";

export function Header() {
  return (
    <header>
      <div className="grid bar-box layout-bar-grid h-32">
        <h1 className="my-6 text-6xl font-bold ml-4 relative z-10 -skew-x-6 bg-red-600 flex items-center">
          <Link to="/" className="text-white no-underline uppercase py-2 px-3 ">
            Sick Fits
          </Link>
        </h1>
        <Nav></Nav>
      </div>
      <Cart />
      <Search />
    </header>
  );
}
