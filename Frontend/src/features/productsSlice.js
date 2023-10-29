import { createSlice } from "@reduxjs/toolkit";

// Retreving from Local Storage //
const storedCartData = localStorage.getItem("cartData");
const storedFavData = localStorage.getItem("favouritesData");
const storedtotalItemsInCart = localStorage.getItem("totalItemsInCart");
const storedtotalItemsInFavourites = localStorage.getItem(
  "totalItemsInFavourites"
);

const cartData = JSON.parse(storedCartData);
const favouritesData = JSON.parse(storedFavData);
const totalCartItems = JSON.parse(storedtotalItemsInCart);
const totalItemsInFavourites = JSON.parse(storedtotalItemsInFavourites);

// Initial Data //
const initialState = {
  cartList: cartData?.length > 0 ? cartData : [],
  favourites: favouritesData?.length > 0 ? favouritesData : [],
  totalItemsInCart: totalCartItems > 0 ? totalCartItems : 0,
  totalItemsInFavourites:
    totalItemsInFavourites > 0 ? totalItemsInFavourites : 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState, // Corrected typo: intialState to initialState
  reducers: {
    addProduct: (state, action) => {
      if (action.payload.type === "cart") {
        let index = state.cartList.findIndex(
          (item) => action.payload.id === item.id
        );
        let quantity = index == -1 ? 1 : state.cartList[index].quantity + 1;
        let totalAmount = quantity * action.payload.price;
        if (index != -1) {
          state.cartList[index] = {
            ...action.payload,
            quantity,
            totalAmount,
          };
        } else {
          state.cartList.push({
            ...action.payload,
            quantity,
            totalAmount,
          });
        }
        state.totalItemsInCart = state.cartList.reduce((accumulator, item) => {
          return accumulator + item.quantity;
        }, 0);
      } else {
        let index = state.favourites.findIndex(
          (item) => action.payload.id === item.id
        );
        if (index === -1) {
          let totalAmount = action.payload.price;
          state.favourites.push({ ...action.payload, totalAmount });
        }
        state.totalItemsInFavourites = state.favourites.length;
      }

      // Saving in Local Storage //
      localStorage.setItem("cartData", JSON.stringify(state.cartList));
      localStorage.setItem(
        "totalItemsInCart",
        JSON.stringify(state.totalItemsInCart)
      );
      localStorage.setItem("favouritesData", JSON.stringify(state.favourites));
      localStorage.setItem(
        "totalItemsInFavourites",
        JSON.stringify(state.totalItemsInFavourites)
      );
    },
    removeProduct: (state, action) => {
      if (action.payload.type === "cart") {
        if (action.payload.removeCount === "one") {
          let index = state.cartList.findIndex(
            (item) => action.payload.id === item.id
          );
          let quantity = state.cartList[index].quantity - 1;
          let totalAmount = quantity * state.cartList[index].price;
          if (quantity == 0) {
            let newArray = state.cartList.filter((item) => {
              return item.id !== action.payload.id;
            });
            state.cartList = newArray;
          } else {
            state.cartList[index] = {
              ...state.cartList[index],
              quantity,
              totalAmount,
            };
          }
          state.totalItemsInCart = state.cartList.reduce(
            (accumulator, item) => {
              return accumulator + item?.quantity;
            },
            0
          );
        } else {
          let newArray = state.cartList.filter((item) => {
            return item.id !== action.payload.id;
          });
          state.cartList = newArray;
          state.totalItemsInCart = state.cartList.reduce(
            (accumulator, item) => {
              return accumulator + item?.quantity;
            },
            0
          );
        }
      } else {
        let newArray = state.favourites.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.favourites = newArray;
        state.totalItemsInFavourites = state.favourites.reduce(
          (accumulator, item) => {
            return accumulator + item?.quantity;
          },
          0
        );
      }
      // Saving in Local Storage //
      localStorage.setItem("cartData", JSON.stringify(state.cartList));
      localStorage.setItem(
        "totalItemsInCart",
        JSON.stringify(state.totalItemsInCart)
      );
      localStorage.setItem("favouritesData", JSON.stringify(state.favourites));
      localStorage.setItem(
        "totalItemsInFavourites",
        JSON.stringify(state.totalItemsInFavourites)
      );
    },
    removeAllProduct: (state, action) => {
      if (action.payload.type === "cart") {
        state.cartList = [];
        state.totalItemsInCart = 0;
      } else {
        state.favourites = [];
        state.totalItemsInFavourites = 0;
      }
      // Saving in Local Storage //
      localStorage.setItem("cartData", JSON.stringify(state.cartList));
      localStorage.setItem(
        "totalItemsInCart",
        JSON.stringify(state.totalItemsInCart)
      );
      localStorage.setItem("favouritesData", JSON.stringify(state.favourites));
      localStorage.setItem(
        "totalItemsInFavourites",
        JSON.stringify(state.totalItemsInFavourites)
      );
    },
    updateProduct: (state, action) => {
      let index = state.cartList.findIndex(
        (item) => action.payload.id === item.id
      );
      let quantity = state.cartList[index].quantity + 1;
      let totalAmount = quantity * state.cartList[index].price;
      state.cartList[index] = {
        ...state.cartList[index],
        quantity,
        totalAmount,
      };
      state.totalItemsInCart = state.cartList.reduce((accumulator, item) => {
        return accumulator + item?.quantity;
      }, 0);
      // Saving in Local Storage //
      localStorage.setItem("cartData", JSON.stringify(state.cartList));
      localStorage.setItem(
        "totalItemsInCart",
        JSON.stringify(state.totalItemsInCart)
      );
      localStorage.setItem("favouritesData", JSON.stringify(state.favourites));
      localStorage.setItem(
        "totalItemsInFavourites",
        JSON.stringify(state.totalItemsInFavourites)
      );
    },
  },
});

export const { addProduct, removeProduct, removeAllProduct,updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
