import { createSlice } from "@reduxjs/toolkit";

export const bonusSlice = createSlice({
  name: "bonus",
  initialState: {
    point: 0,
  },
  reducers: {
    increment: (state) => {
      state.point += 1;
    }

  },
});
// Action creators
export const { increment } = bonusSlice.actions;
export default bonusSlice.reducer;
