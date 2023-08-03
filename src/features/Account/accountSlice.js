import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
  // Using Async Thunk
 export const getUserAccount = createAsyncThunk(
    'account/getUser',
    async (userId, thunkAPI) => {
      const { data } = await axios.get(`http://localhost:8080/accounts/${userId}`);
      return data.amount
    }
  )
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
  extraReducers:(builder)=>{
    builder
    .addCase(getUserAccount.fulfilled,(state,action)=>{
      state.amount = action.payload;
      state.pending = false;
    })
    .addCase(getUserAccount.pending,(state,action)=>{
      state.pending = true;
    })
    .addCase(getUserAccount.rejected,(state,action)=>{
      state.error = action.error;
    })
  }
});
// Action creators
export const { increment, decrement, incrementByAmt } = accountSlice.actions;
export default accountSlice.reducer;
