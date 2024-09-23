import { createSlice } from "@reduxjs/toolkit";
import { totalPriceCalculator } from "../../utils/helpers";

export const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    totalPrice: 0,
  },
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
      state.totalPrice = totalPriceCalculator(state.basket);
    },

    multipleBuy: (state, action) => {
      state.basket.find(({ name }) => name === action.payload.name).count =
        action.payload.count;

      state.totalPrice = totalPriceCalculator(state.basket);
    },
    deleteProduct: (state, action) => {
      state.basket = state.basket.filter(
        ({ name }) => name !== action.payload.name
      );
      state.totalPrice = totalPriceCalculator(state.basket);
    },
    buy: (state) => {
      state.basket = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToBasket, buy, deleteProduct, multipleBuy } =
  BasketSlice.actions;

export default BasketSlice.reducer;
