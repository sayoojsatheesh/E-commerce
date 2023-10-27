import { createSlice } from "@reduxjs/toolkit";

const storedCartData = localStorage.getItem("cartData");
const storedFavData = localStorage.getItem("favouritesData");
const cartData = JSON.parse(storedCartData);
const favouritesData = JSON.parse(storedFavData);
const initialState = {
  cartList: cartData?.length > 0 ? cartData : [],
  favourites: favouritesData?.length > 0 ? favouritesData : [],
};

console.log("initialState =", initialState.cartList);
export const productSlice = createSlice({
  name: "products",
  initialState, // Corrected typo: intialState to initialState
  reducers: {
    addProduct: (state, action) => {
      if (action.payload.type === "cart") {
        state.cartList.push(action.payload);
      } else {
        state.favourites.push(action.payload);
      }
      localStorage.setItem("cartData", JSON.stringify(state.cartList));
      localStorage.setItem("favouritesData", JSON.stringify(state.favourites));
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
