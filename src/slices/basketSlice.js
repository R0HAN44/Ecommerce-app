import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  orders: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove the product (id:${action.payload.id}) as its not in basket`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket, addToOrder } =
  basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectOrders = (state) => state.basket.orders;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
