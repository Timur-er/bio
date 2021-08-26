import {combineReducers} from "redux";
import popupReducer from "./popup/reducer";
import authReducer from "./auth/reducer";

const reducer = combineReducers({
    popup: popupReducer,
    auth: authReducer
});

export default reducer;