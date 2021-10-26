import {CLOSE_MODAL, OPEN_MODAL} from "./types";

const initialState = {
    questionModalOpen: false
}
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {questionModalOpen: true}
        case CLOSE_MODAL:
            return {questionModalOpen: false}
        default:
            return state
    }
}

export default modalReducer;