import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  total_items: 0,
  total_amount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      let itemIndex = state.product.findIndex(item => item.id === payload.id)
      if(itemIndex >= 0){
        state.product[itemIndex].itemQuantity += 1;
      }else{
        state.product.push({itemQuantity: 1, ...payload});
      }
    },
    increamentItemQuantity: (state, {payload}) =>{
      const itemIndex = state.product.findIndex(item => item.id === payload)
      state.product[itemIndex].itemQuantity += 1;
    },
    decreamentItemQuantity: (state, {payload}) =>{
      const itemIndex = state.product.findIndex(item => item.id === payload)
      if(state.product[itemIndex].itemQuantity > 1){
        state.product[itemIndex].itemQuantity -= 1;
      }
    },
    removeItem: (state, {payload}) =>{
      currentProduct = state.product.filter(item => item.id != payload);
      state.product.push(currentProduct);
    },
  },
});

export const { addToCart, increamentItemQuantity, decreamentItemQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
