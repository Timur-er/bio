
const initialState = {
    isOpen: false,
    message: null,
}

const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'openPopup':
            return { isOpen: true, message: action.payload }
        case 'closePopup':
            return {isOpen: false, message: null}
        default:
            return state
    }
}

export default popupReducer;