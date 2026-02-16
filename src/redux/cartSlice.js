import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // add itme in the cart
    AddItem: (state, action) => {
      const existItem = state.find(
        (item) => item.id === action.payload.id
      );

      if (existItem) {
        existItem.qty += 1; // RTK allows mutation
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
// Remove Item from cart
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

// Change the Quantity
   IncrementQty: (state, action) => {
  const item = state.find(
    (item) => item.id === action.payload
  );

  if (item) {
    item.qty += 1; // safe mutation with RTK (Immer)
  }
},

  DecrementQty: (state, action) => {
  const item = state.find(
    (item) => item.id === action.payload
  );

  if (!item) return;

  if (item.qty > 1) {
    item.qty -= 1;
  } else {
    // qty === 1 → remove item
    return state.filter(i => i.id !== action.payload);
  }
},



  },
});

export const { AddItem, RemoveItem,IncrementQty,DecrementQty } = cartSlice.actions;
export default cartSlice.reducer;
