import { Nav } from "./Nav.server";

export function Header() {
  return (
    <header>
      <div className="grid grid-cols-2 justify-between items-stretch bar">
        <h1 className="fs-xl ml-4 relative z-10 -skew-x-6 bg-red-100">
          Sick Fits
        </h1>
        <Nav></Nav>
      </div>
      <div className="grid grid-cols-2 bar">search</div>
    </header>
  );
}
