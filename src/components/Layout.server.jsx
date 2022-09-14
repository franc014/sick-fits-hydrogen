import { Header } from "./Header.server";

export function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <main className="my-0 mx-auto p-10 max-w-5xl">{children}</main>

      {/* <footer>the footer</footer> */}
    </div>
  );
}
