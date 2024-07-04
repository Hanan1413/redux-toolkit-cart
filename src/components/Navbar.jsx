import React from "react";
import { CartIcon } from "../icons";
//  useSelector to acess entier state in store
import { useSelector } from "react-redux";

const Navbar = () => {
    // cart is the reducer 
  //  useSelector to acess entier state in store

  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <div className="total-amount">{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
