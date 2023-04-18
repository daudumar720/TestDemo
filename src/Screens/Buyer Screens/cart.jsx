import React, { createContext, useEffect, useReducer } from "react";
import BuyerNavbar from "../../Components/Buyer Components/Buyer_Navbar";
import Footer from "../../Components/Global Components/Footer";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

export const Context = createContext();

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to remove single item from the cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear cart
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  // useEffect to change state
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <>
      <BuyerNavbar />
      <Context.Provider value={{ ...state, removeItem, clearCart }}>
        <ContextCart />
      </Context.Provider>

      <Footer />
    </>
  );
};

export default Cart;
