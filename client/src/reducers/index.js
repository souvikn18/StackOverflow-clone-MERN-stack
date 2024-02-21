import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import currentUserReducer from './currentUser.reducer'

export default combineReducers({
    authReducer,
    currentUserReducer
})