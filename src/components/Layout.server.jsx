import React from "react";
import { Header } from "./Header.server";

export function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      {/* <footer>the footer</footer> */}
    </div>
  );
}
