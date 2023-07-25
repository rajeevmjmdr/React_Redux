import { createAction, createSlice } from "@reduxjs/toolkit";

const incrementByAmt = createAction('account/incrementByAmt')
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
  extraReducers:(builder)=>{
    builder.addCase(incrementByAmt,(state,action)=>{
      if(action.payload>=10) // amount>=10 then bonus point increase by 1
          state.point += 1;
    })
  }
});
// Action creators
export const { increment } = bonusSlice.actions;
export default bonusSlice.reducer;
