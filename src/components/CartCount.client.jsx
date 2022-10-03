import { useCart } from "@shopify/hydrogen";
import { useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Count() {
  const { totalQuantity } = useCart();
  const nodeRef = useRef(null);
  return (
    <span className="cart-count-animation">
      <TransitionGroup component={null}>
        <CSSTransition
          nodeRef={nodeRef}
          unmountOnExit
          className="count"
          classNames="count"
          key={totalQuantity}
          timeout={{ enter: 400, exit: 400 }}
        >
          <div ref={nodeRef}>{totalQuantity}</div>
        </CSSTransition>
      </TransitionGroup>
    </span>
  );
}

export default Count;
