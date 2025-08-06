import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, title, price, quantity}
  user: {
    name: "",
    address: "",
    pincode: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, title, price, quantity } = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ id, title, price, quantity });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addItem, removeItem, clearCart, setUser } = cartSlice.actions;
export default cartSlice.reducer;
