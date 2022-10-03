import { useCart } from "@shopify/hydrogen";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Count() {
  const { totalQuantity } = useCart();
  return (
    <span className="cart-count-animation">
      <TransitionGroup>
        <CSSTransition
          unmountOnExit
          className="count"
          classNames="count"
          key={totalQuantity}
          timeout={{ enter: 400, exit: 400 }}
        >
          <div>{totalQuantity}</div>
        </CSSTransition>
      </TransitionGroup>
    </span>
  );
}

export default Count;
