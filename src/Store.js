import { configureStore } from "@reduxjs/toolkit"
import accountReducer from './features/Account/accountSlice'
import bonusReducer from './features/Bonus/bonusSlice'
import rewardReducer from "./features/Reward/rewardReducer"
export default configureStore({
    reducer:{
        account: accountReducer,
        bonus: bonusReducer,
        reward: rewardReducer
    }
})