import { Suspense } from "react";
import { Header } from "./Header.server";

export function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <main className="my-0 mx-auto p-10 max-w-5xl">
        <Suspense fallback={<AppFallback />}>{children}</Suspense>
      </main>
      {/* <footer>the footer</footer> */}
    </div>
  );
}

function AppFallback() {
  return (
    <div className="bg-rose-200 w-full h-screen app-fallback tracking-widest text-stone-200 flex items-center justify-center text-7xl">
      LOADING...
    </div>
  );
}
