import { createSlice } from "@reduxjs/toolkit";
import { totalPriceCalculator } from "../../utils/helpers";

export const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    totalPrice: 0,
    discount: 0,
    orders: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
      state.totalPrice = totalPriceCalculator(state.basket);
    },

    multipleBuy: (state, action) => {
      state.basket.find(
        ({ productName }) => productName === action.payload.name
      ).count = action.payload.count;

      state.totalPrice = totalPriceCalculator(state.basket);
    },
    deleteProduct: (state, action) => {
      state.basket = state.basket.filter(
        ({ productName }) => productName !== action.payload.name
      );
      state.totalPrice = totalPriceCalculator(state.basket);
    },
    buy: (state) => {
      state.basket = [];
      state.totalPrice = 0;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },

    setOrders: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const {
  addToBasket,
  buy,
  deleteProduct,
  multipleBuy,
  setDiscount,
  setOrders,
} = BasketSlice.actions;

export default BasketSlice.reducer;
