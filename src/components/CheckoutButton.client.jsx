import { useCart } from "@shopify/hydrogen";

function CheckoutButton() {
  const { checkoutUrl } = useCart();
  return (
    <a
      href={checkoutUrl}
      className="bg-red-600 text-white text-2xl
    font-normal text-lg py-2 px-4"
    >
      Checkout
    </a>
  );
}

export default CheckoutButton;
