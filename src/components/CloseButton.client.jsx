function CloseButton({ closeCart }) {
  return (
    <button
      onClick={closeCart}
      type="button"
      className="bg-stone-800 text-white text-2xl 
      flex items-center justify-center border-0 absolute 
      z-10 right-0 p-2 "
    >
      <span className="hover:rotate-[360deg] transition-transform">
        &times;
      </span>
    </button>
  );
}

export default CloseButton;
