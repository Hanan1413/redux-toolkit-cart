import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItem from "../../cartItems";
import { FaGlasses } from "react-icons/fa";


const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  // make initialState value of cartitems = to cartItem
  cartItems: [],
  // how many items in the cart
  amount: 0,
  // total money
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // action is clearCart
    clearCart: (state) => {
      // I don't have to return the new state immer  libarary   behind the scene does that
      state.cartItems = [];
    },
    // action is removeItem
    removeItems: (state, action) => {
      const itemId = action.payload;
      // if id matches item will not return
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      // decrease cart item
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      // Iterate over each item in the 'cartItems' array

      state.cartItems.forEach((item) => {
        amount += item.amount; // Add the 'amount' of the current item to the 'amount' variable
        total += item.amount * item.price; // Add the product of 'amount' and 'price' of the current item to the 'total' variable
      });
      state.amount = amount; // Update the 'amount' property of 'state' with the total quantity calculated
      state.total = total.toFixed();
    },

    // Define extra reducers using a builder function

    extraReducers: (builder) => {
      // Add a case for the pending state of the getCartItems action
      builder
        .addCase(getCartItems.pending, (state) => {
          // When the action is pending, set isLoading to true

          state.isLoading = true;
        })
        // Add a case for the fulfilled state of the getCartItems action

        .addCase(getCartItems.fulfilled, (state, action) => {
          // When the action is fulfilled, set isLoading to false

          state.isLoading = false;
          // Update the cartItems state with the payload from the action

          state.cartItems = action.payload;
        })
        // Add a case for the rejected state of the getCartItems action

        .addCase(getCartItems.rejected, (state, action) => {
          // Log the action to the console for debugging purposes
          console.log(action);
          // When the action is rejected, set isLoading to false

          state.isLoading = false;
        });
    },
  },
});

export const { clearCart, removeItems, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
