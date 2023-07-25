import { configureStore } from "@reduxjs/toolkit"
import accountReducer from './features/Account/accountSlice'
export default configureStore({
    reducer:{
        account: accountReducer
    }
})