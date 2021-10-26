import {combineReducers} from "redux";
import popupReducer from "./popup/reducer";
import authReducer from "./auth/reducer";
import modalReducer from "./modal/reducer";
import questionReducer from "./question/reducer";

const reducer = combineReducers({
    popup: popupReducer,
    auth: authReducer,
    modal: modalReducer,
    question: questionReducer
});

export default reducer;