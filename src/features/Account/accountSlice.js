import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    amount: 0,
  },
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmt: (state, action) => {
      state.amount += action.payload;
    },
  },
});
// Action creators
export const { increment, decrement, incrementByAmt } = accountSlice.actions;
export default accountSlice.reducer;
