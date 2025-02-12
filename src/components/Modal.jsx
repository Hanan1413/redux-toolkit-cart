import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

function Modal() {
  // const {modal} useSelector((state) => state.modal)
  // const { cartItems, total, amount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          {/* on confirm close mdodal and clear cart */}
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() =>{
              dispatch(closeModal())
              dispatch(clearCart())
            }
            } 
          >
            confirm
          </button>
          {/* dispatch closeModal action */}
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => dispatch(closeModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
