import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  // To enter to store
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  // every time we update something relate to cart item we will invoke this function

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);


  // once the appliction load  dipatch getCartItems
   useEffect(() =>{
    dispatch(getCartItems())
   }, [dispatch])


   if(isLoading){
    return(
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    )
   }
  return (
    <main>
      {/* if modal is open show the modal  */}
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
