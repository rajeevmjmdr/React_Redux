import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  point: 0,
};

export const increment = createAction('reward/increment')
export const incrementBYAmt = createAction('reward/incrementBYAmt')
const rewardReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(increment, (state, action) => {
    state.point++;
  })
  .addCase(incrementBYAmt, (state, action) => {
    state.point+=action.payload;
  });
});
export default rewardReducer