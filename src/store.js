import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Load cart state from localStorage
const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadCartState() || undefined,
  },
});

// Save cart state to localStorage on changes
store.subscribe(() => {
  try {
    const state = store.getState();
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    // ignore write errors
  }
});

export default store;
