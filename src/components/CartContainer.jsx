import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {clearCart} from '../features/cart/cartSlice'
import { openModal } from "../features/modal/modalSlice";



function CartContainer() {
    // useSelector to access store 
  const { cartItems, total, amount } = useSelector((state) => state.cart);

//   to dispatch action to the store
  const dispatch  = useDispatch()

    // the amount display conditonaly emapty cart
  if (amount < 1) {
    return <section className="cart">
        <header >
            <h2>Your bag </h2>
            <h4 className="empty-cart"> is currently empty</h4>
        </header>
    </section>;
  }
       return <section className="cart">
         <header>
            <h2>your bag</h2>
         </header>
         <div>
            {cartItems.map((item) =>{
                return <CartItem  key={item.id} {...item}/>
            })}
         </div>
         <footer>
            <hr />
            <div className="cart-total">
            <h4>
                total <span>${total}</span>
            </h4>
            </div>
            <button className="btn clear-btn" onClick={() => dispatch(openModal())}> Clear Car</button>
            
         </footer>
       </section>;
}

export default CartContainer;
