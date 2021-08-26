
const snoop = () => {};
const initialState = {
    userId: null,
    token: null,
    login: snoop,
    logout: snoop,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login':
            return {...action.payload}
        default:
            return state
    }
}

export default authReducer;