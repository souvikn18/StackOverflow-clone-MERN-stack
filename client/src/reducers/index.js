import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import currentUserReducer from './currentUser.reducer'
import questionReducer from './question.reducer'
import userReducer from "./user.reducer";

export default combineReducers({
    authReducer,
    currentUserReducer,
    questionReducer,
    userReducer
})