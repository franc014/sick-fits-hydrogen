function CloseButton({ closeCart }) {
  return (
    <button
      onClick={closeCart}
      type="button"
      className="bg-stone-700 text-white text-5xl border-0 absolute z-10 right-0"
    >
      &times;
    </button>
  );
}

export default CloseButton;
