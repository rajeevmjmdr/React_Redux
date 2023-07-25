import { configureStore } from "@reduxjs/toolkit"
import accountReducer from './features/Account/accountSlice'
import bonusReducer from './features/Bonus/bonusSlice'
export default configureStore({
    reducer:{
        account: accountReducer,
        bonus: bonusReducer
    }
})