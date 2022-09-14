export function Cart() {
  return (
    <div
      className=" p-5 fixed bg-white h-full top-0 right-0 w-2/5 
    bottom-0 shadow-2xl z-10 grid cart"
    >
      <header className="border-b border-stone-700 mb-8 pb-8">
        {/*  <Supreme>{me.name}'s Cart</Supreme> */}
        <h3 className="bg-red-600 text-white inline-block px-1 py-2 -skew-x-3 m-0 text-7xl">
          Your Cart
        </h3>
      </header>
      {/* <CloseButton onClick={closeCart} type="button">
        &times;
      </CloseButton> */}
      <button
        type="button"
        className="bg-stone-700 text-white text-5xl border-0 absolute z-10 right-0"
      >
        &times;
      </button>
      <ul className="m-0 p-0 list-none overflow-scroll">
        <li>Cart Item</li>
      </ul>
      <footer
        className="border-t-5 border-double border-stone-700 
      mt-8 pt-8 items-center text-5xl font-bold"
      >
        <p className="m-0">Price</p>
      </footer>
    </div>
  );
}
